import FoodItem from "@/components/FoodItem";
import React from "react"

const styles = {
  container: "py-4 flex flex-wrap items-center justify-center"
}
const Products = () => {
  return (
    <div className={styles.container}>
      <FoodItem/>
      <FoodItem/>
      <FoodItem/>
      <FoodItem/>
      <FoodItem/>
      <FoodItem/>
      <FoodItem/>
      <FoodItem/>
      <FoodItem/>
      <FoodItem/>
      <FoodItem/>
      <FoodItem/>
    </div>
  );
};

export default Products;
