import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

export const emptyCart = {
  userId: "",
  numberOfItems: 0,
  totalAmount: 0,
  shippingCharges: 0,
  discount: 0,
  cartItems: [],
};

type cartItem = {
  quantity: number;
  foodItemId: string;
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
  addItem: (foodiItemId: string) => void;
  removeItem: (foodiItemId: string) => void;
  increaseQuantity: (foodiItemId: string) => void;
  decreaseQuantity: (foodiItemId: string) => void;
  setCartData: (cartData: cart) => void;
};

const cartContextDefaultValues: cartContextType = {
  cart: emptyCart,
  isLoading: false,
  errorMessage: "",
  addItem: (foodiItemId: string) => {},
  removeItem: (foodiItemId: string) => {},
  increaseQuantity: (foodiItemId: string) => {},
  decreaseQuantity: (foodiItemId: string) => {},
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

  const addItem = async (foodiItemId: string) => {};
  const removeItem = async (foodiItemId: string) => {};
  const increaseQuantity = async (foodiItemId: string) => {};
  const decreaseQuantity = async (foodiItemId: string) => {};
  const setCartData = (cartData: cart) => {
    console.log('setCartData called.')
    if (cartData) {
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
