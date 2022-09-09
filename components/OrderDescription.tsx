import React from "react";

const styles = {
  container: "",
  foodItemDetails: "text-xs font-normal flex justify-between",
  orderTotal: "text-center p-2 font-semibold text-base",
};

const OrderDescription = () => {
  return (
    <div className={styles.container}>
      <div className={styles.foodItemDetails}>
        <p>Samosa</p>
        <p className="text-sm font-bold">
          x
          {2}
        </p>
      </div>
      <div className={styles.foodItemDetails}>
        <p > Veg Pizza</p>
        <p className="text-sm font-bold">
          x
          {5}
        </p>
      </div>
      <div className={styles.foodItemDetails}>
        <p>Choco Icecream</p>
        <p className="text-sm font-bold">
          x
          {7}
        </p>
      </div>
      <div className={styles.orderTotal}>
        <p>4546 RS.</p>
      </div>
    </div>
  );
};

export default OrderDescription;
