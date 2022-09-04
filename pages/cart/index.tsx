import CartItem from "@/components/CartItem";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { useCart } from "context/CartContext";
const styles = {
  container: "",
  mainHeading: "font-mono text-2xl subpixel-antialiased font-light mt-16",
  contentContainer: "container flex mx-auto px-4 pt-36",
  hr: "mt-4",
  cartItems: "grow-[3]",
  cartItemsHead: "flex justify-between",
  cartItemsHeading: "flex",
  orderSummary: "grow",
  itemsList: "mt-4 flex flex-col gap-4",
};
const Cart = () => {
  const { cart, isLoading, errorMessage } = useCart();
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.contentContainer}>
        <div className={styles.cartItems}>
          <div className={styles.cartItemsHead}>
            <p>Shopping Cart</p>
            <p>3 Items</p>
          </div>
          <hr className={styles.hr} />
          <div className={styles.cartItemsHeading}>
            <p className="grow-[2]">Food Details</p>
            <p className="grow">Quantity</p>
            <p className="grow">Price</p>
            <p className="grow">Total</p>
          </div>
          <div className={styles.itemsList}>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
        </div>
        <div className={styles.orderSummary}>
          <p>Order Summary</p>
          <hr className={styles.hr} />
          <span>
            <p>Items 4</p>
            <p>$400</p>
          </span>
          <p>
            Shipping - $100
          </p>
          <hr className={styles.hr}/>
          <span>
            <p>Total Cost</p>
            <p>$500</p>
          </span>
          <button>
            Checkout
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
