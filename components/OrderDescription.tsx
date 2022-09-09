import React from "react";
import { OrderItem } from "./OrderItem";

const styles = {
  container: "",
  foodItemDetails: "text-xs gap-x-2 font-normal flex justify-between",
  orderTotal: "text-center bg-orange-500 text-white py-1 font-semibold text-base mt-2 rounded-lg",
};

interface OrderDescriptionProps {
  orderDescriptionItems: OrderItem[];
  totalAmount: number;
}
const OrderDescription = ({
  totalAmount,
  orderDescriptionItems,
}: OrderDescriptionProps) => {
  return (
    <div className={styles.container}>
      {orderDescriptionItems.map((item: OrderItem) => {
        return (
          <div className={styles.foodItemDetails}>
            <p>{item.name}</p>
            <p className="text-sm font-bold">x{item.quantity}</p>
          </div>
        );
      })}

      <div className={styles.orderTotal}>
        <p>{totalAmount} RS.</p>
      </div>
    </div>
  );
};

export default OrderDescription;
