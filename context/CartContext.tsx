import { createContext, ReactNode, useContext, useState } from "react";
import supabase from "utils/supabase";
import { useAuth } from "./AuthContext";

export const emptyCart = {
  userId: "",
  numberOfItems: 0,
  totalAmount: 0,
  shippingCharges: 0,
  discount: 0,
  cartItems: [],
};

type cartItem = {
  name: string;
  quantity: number;
  price: number;
  foodItemId: string;
  category: string;
  image_url: string;
};

type cart = {
  userId: string;
  numberOfItems: number;
  totalAmount: number;
  shippingCharges: number;
  discount: number;
  cartItems: cartItem[];
};

type cartContextType = {
  cart: cart;
  isLoading: boolean;
  errorMessage: string;
  addItem: (
    foodiItemId: string,
    price: number,
    quantity: number,
    image_url: string,
    category: string,
    name: string
  ) => void;
  removeItem: (foodiItemId: string, price: number) => void;
  increaseQuantity: (foodiItemId: string, price: number) => void;
  decreaseQuantity: (foodiItemId: string, price: number) => void;
  setCartData: (cartData: cart) => void;
};

const cartContextDefaultValues: cartContextType = {
  cart: emptyCart,
  isLoading: false,
  errorMessage: "",
  addItem: (
    foodiItemId: string,
    price: number,
    quantity: number,
    image_url: string,
    category: string,
    name: string
  ) => {},
  removeItem: (foodiItemId: string, price: number) => {},
  increaseQuantity: (foodiItemId: string, price: number) => {},
  decreaseQuantity: (foodiItemId: string, price: number) => {},
  setCartData: (cartData: cart) => {},
};

const CartContext = createContext<cartContextType>(cartContextDefaultValues);

export function useCart() {
  return useContext(CartContext);
}

type Props = {
  children: ReactNode;
};

export function CartProvider({ children }: Props) {
  const [cart, setCart] = useState<cart>(emptyCart);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const saveCartToDB = async () => {
    const { error } = await supabase
      .from("carts")
      .update({
        number_of_items: cart.numberOfItems,
        total_amount: cart.totalAmount,
        shipping_charges: cart.shippingCharges,
        discount: cart.discount,
        cart_items: cart.cartItems,
      })
      .match({ user_id: cart.userId });
    if (error) {
      console.log(error);
    }
  };
  const addItem = async (
    foodiItemId: string,
    price: number,
    quantity: number,
    image_url: string,
    category: string,
    name: string
  ) => {
    setIsLoading(true);
    const oldCart = cart;
    oldCart?.cartItems?.push({
      foodItemId: foodiItemId,
      price: price,
      quantity: 1,
      image_url: image_url,
      category: category,
      name: name,
    });
    oldCart.numberOfItems++;
    oldCart.totalAmount += price;
    oldCart.userId = cart.userId;
    setCart({ ...oldCart });
    await saveCartToDB();
    setIsLoading(false);
  };

  const removeItem = async (foodiItemId: string, price: number) => {
    setIsLoading(true);
    const oldCart = cart;
    const index = oldCart?.cartItems?.findIndex(
      (item) => item.foodItemId === foodiItemId
    );
    if (index > -1) {
      oldCart.totalAmount -= price * oldCart.cartItems[index].quantity;
      oldCart.cartItems.splice(index, 1);

      oldCart.numberOfItems--;
    }
    setCart({ ...oldCart });
    await saveCartToDB();
    setIsLoading(false);
  };
  const increaseQuantity = async (foodiItemId: string, price: number) => {
    setIsLoading(true);
    const oldCart = cart;
    const index = oldCart.cartItems.findIndex(
      (item) => item.foodItemId === foodiItemId
    );
    if (index > -1) {
      oldCart.cartItems[index].quantity++;
      oldCart.totalAmount += price;
    }
    setCart({ ...oldCart });
    await saveCartToDB();
    setIsLoading(false);
  };
  const decreaseQuantity = async (foodiItemId: string, price: number) => {
    setIsLoading(true);
    const oldCart = cart;
    const index = oldCart.cartItems.findIndex(
      (item) => item.foodItemId === foodiItemId
    );
    if (index > -1) {
      oldCart.cartItems[index].quantity--;
      oldCart.totalAmount -= price;
      if (oldCart.cartItems[index].quantity == 0) {
        oldCart.cartItems.splice(index, 1);
        oldCart.numberOfItems--;
      }
    }
    setCart({ ...oldCart });
    await saveCartToDB();
    setIsLoading(false);
  };
  const setCartData = (cartData: cart) => {
    if (cartData) {
      console.log(cartData);
      setCart({
        userId: cartData.userId,
        numberOfItems: cartData.numberOfItems,
        totalAmount: cartData.totalAmount,
        shippingCharges: cartData.shippingCharges,
        discount: cartData.discount,
        cartItems: cartData.cartItems,
      });
    }
  };
  const value = {
    cart,
    isLoading,
    errorMessage,
    addItem,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
    setCartData,
  };

  return (
    <>
      <CartContext.Provider value={value}>{children}</CartContext.Provider>
    </>
  );
}
