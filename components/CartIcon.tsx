import { useCart } from "context/CartContext";
import React from "react";
import { BsCartFill } from "react-icons/bs";
const styles = {
  container: "flex items-center hover:bg-gray-500 hover:bg-opacity-5 p-4 w-16 h-16",
};

const CartIcon = () => {
  const { cart } = useCart();
  return (
    <div className={styles.container}>
      <a href="/cart" className="cart">
        <span className="count">{cart.numberOfItems || 0}</span>
        <BsCartFill className="text-3xl" />
      </a>
    </div>
  );
};

export default CartIcon;
