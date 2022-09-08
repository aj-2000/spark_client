import CartItem from "@/components/CartItem";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { useCart } from "context/CartContext";
import CartSummary from "@/components/CartSummary";
const styles = {
  container: "",
  mainHeading: "font-mono text-2xl subpixel-antialiased font-light mt-16",
  contentContainer: "flex mt-16 justify-center",
  hr: "mt-4",
  cartItems: "",
  cartItemsHead: "flex justify-between",
  cartItemsHeading: "flex",
  cartSummary: "",
  itemsList: "mt-4 flex flex-col gap-4",
  cartSummaryBox: "",
  cartItemsBox: "",
  addMoreItemsButton: "py-2 px-4  bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
};
const Cart = () => {
  const { cart, isLoading, errorMessage } = useCart();
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.contentContainer}>
        <div className={styles.cartItemsBox}>


      <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
        <div className="py-8">
          <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
            <h2 className="text-2xl leading-tight">My Cart</h2>
            
          </div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Food
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Total
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    ></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    cart.cartItems?.map(item => {
                      const cartItem = {
                        id: item.foodItemId,
                        price: item.price,
                        quantity: item.quantity,
                        image_url: item.image_url,
                        category: item.category,
                        name: item.name
                      }
                      return <CartItem key={item.foodItemId} {...cartItem}/>
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className={styles.cartSummaryBox}>
      <CartSummary/>
      </div>

      </div>
      <Footer />
    </div>
  );
};

export default Cart;
