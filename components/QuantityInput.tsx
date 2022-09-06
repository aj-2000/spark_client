import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const styles = {
  continer: "flex gap-x-2",
  quatityStyle: "text-gray-900 whitespace-no-wrap",
  iconStyle: "text-2xl cursor-pointer shadow-lg border",
};
const QuantityInput = () => {
  return (
    <div className={styles.continer}>
      <AiOutlineMinus className={styles.iconStyle} />
      <p className={styles.quatityStyle}>565</p>
      <AiOutlinePlus className={styles.iconStyle} />
    </div>
  );
};

export default QuantityInput;
