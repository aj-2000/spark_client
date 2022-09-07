import { useCart } from "context/CartContext";
import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const styles = {
  continer: "flex gap-x-2",
  quatityStyle: "text-gray-900 whitespace-no-wrap",
  iconStyle: "text-2xl cursor-pointer shadow-lg border",
};
interface QuantityInputProps {
  foodItemId: string;
  quantity: number;
  price: number;
}
const QuantityInput = ({foodItemId, price, quantity}: QuantityInputProps) => {
  const {increaseQuantity, decreaseQuantity} = useCart();
  return (
    <div className={styles.continer}>
      <AiOutlineMinus onClick={ () => decreaseQuantity(foodItemId, price)} className={styles.iconStyle} />
      <p className={styles.quatityStyle}>{quantity}</p>
      <AiOutlinePlus  onClick={ () => increaseQuantity(foodItemId, price)} className={styles.iconStyle} />
    </div>
  );
};

export default QuantityInput;
