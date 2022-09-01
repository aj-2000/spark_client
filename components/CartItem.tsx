import React from "react";

const styles = {
  container: "",
  contentContainer: "flex",
  productDetailsContainer: "flex grow-[2]",
  quantityContainer: "flex grow",
  priceContainer: "grow",
  totalContainer: "grow",
  foodImageContainer: "flex grow",
  foodDetailsContainer: "flex flex-col justify-between grow",
  quantity: "mx-2 border text-center w-8"
};

const CartItem = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.productDetailsContainer}>
          <div className={styles.foodImageContainer}>
            <img src="/images/pizza.png" width="200px"/>
          </div>
          <div className={styles.foodDetailsContainer}>
            <p>Best Veg Pizza</p>
            <p>Pizza</p>
            <p>Remove</p>
          </div>
        </div>
        <div className={styles.quantityContainer}>
          <p> - </p>
        <input className={styles.quantity} type="text" value="1"/>
        <p> + </p>
        </div>
        <div className={styles.priceContainer}>$100</div>
        <div className={styles.totalContainer}>$400</div>
      </div>
    </div>
  );
};

export default CartItem;
