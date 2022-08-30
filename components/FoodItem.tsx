import React from "react";
const styles = {
  container: "",
  card: "flex-shrink-0 mx-2 mb-6 relative overflow-hidden bg-blue-500 rounded-lg max-w-xs shadow-lg -z-20",
  contentContainer: "p-8 gap-2",
  textContainer: "text-white flex flex-col ",
  categoryText: "block opacity-75 -mb-1",
  titleText: "block font-semibold text-xl",
  priceText:
    "text-center bg-white rounded-full text-blue-500 text-xs font-bold px-3 py-2 leading-none flex items-center",
  imgStyle: "m-auto",
  svgStyle: "absolute bottom-0 left-0 mb-8 -z-10 opacity-50",
  addToCartButton: "mt-2 px-6 py-2 transition ease-in duration-200 uppercase rounded-full bg-white text-blue-500 border-2 border-blue-500"
};
const FoodItem = () => {
  return (
    <div className={styles.container}>
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
          <img className={styles.imgStyle} src="/images/pizza.png" />
          <div className={styles.textContainer}>
            <p className={styles.categoryText}>Pizza</p>
            <span className="flex justify-between">
              <p className={styles.titleText}>Double Cheese Veg Pizza</p>
              <span className={styles.priceText}>499 RS.</span>
            </span>
            <button className={styles.addToCartButton}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
