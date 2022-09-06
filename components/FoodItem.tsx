import { useAuth } from "context/AuthContext";
import { useCart } from "context/CartContext";
import React, { useEffect, useState } from "react";

interface FoodItemProps {
  id: string;
  name: string;
  category: string;
  image_url: string;
  price: number;
  color: string;
}

const FoodItem = ({
  id,
  name,
  category,
  image_url,
  price,
  color,
}: FoodItemProps) => {
  const styles = {
    // container: "", relative hta diya tha
    card: `flex-shrink-0 mx-2 mb-6 overflow-hidden ${color}-bg-item rounded-lg max-w-xs shadow-lg -z-20`,
    contentContainer: "p-8 gap-2",
    textContainer: "text-white flex flex-col ",
    categoryText: "block opacity-75 -mb-1",
    titleText: "block font-semibold text-xl",
    priceText: `text-center bg-white rounded-full ${color}-text-item text-xs font-bold px-3 py-2 leading-none flex items-center`,
    imgStyle: "m-auto",
    svgStyle: "absolute bottom-0 left-0 mb-8 -z-10 opacity-50",
    addToCartButton: `z-100 mt-2 px-6 py-2 transition ease-in duration-200 uppercase rounded-full bg-white ${color}-text-item border-2 border-${color}-500`,
    addedToCartButton: `mt-2 px-6 py-2 transition ease-in duration-200 uppercase rounded-full bg-white ${color}-text-item border-2 border-${color}-500`,
  };
  const [isAddedToCart, setIsAddedToCart] = useState<boolean>(false);
  const { addItem, removeItem } = useCart();
  const { user } = useAuth();
  const { cart } = useCart();
  useEffect(() => {
    if (user.id !== "") {
      const index: number = cart.cartItems?.findIndex(
        (item) => item.foodItemId === id
      );
      if (index > -1) {
        setIsAddedToCart(true);
      }
    }
  }, [user, cart]);
  function toggleAddedToCartState() {
    setIsAddedToCart(!isAddedToCart);
    if (!isAddedToCart) {
      addItem(id, price);
    } else {
      removeItem(id, price);
    }
  }
  return (
    <div>
      <div className={styles.card}>
        <svg className={styles.svgStyle} viewBox="0 0 375 283" fill="none">
          <rect
            x="159.52"
            y="175"
            width="152"
            height="152"
            rx="8"
            transform="rotate(-45 159.52 175)"
            fill="white"
          ></rect>
          <rect
            y="107.48"
            width="152"
            height="152"
            rx="8"
            transform="rotate(-45 0 107.48)"
            fill="white"
          ></rect>
        </svg>
        <div className={styles.contentContainer}>
          <img className={styles.imgStyle} src={image_url} />
          <div className={styles.textContainer}>
            <p className={styles.categoryText}>{category}</p>
            <span className="flex justify-between">
              <p className={styles.titleText}>{name}</p>
              <span className={styles.priceText}>{price} RS.</span>
            </span>
            <button
              onClick={toggleAddedToCartState}
              className={styles.addedToCartButton}
            >
              {isAddedToCart ? "Added to cart" : "Add to cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
