import FoodItem from "@/components/FoodItem";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react"

const styles = {
  container: "py-4 flex flex-wrap items-center justify-center"
}
const Menu = () => {
  return (
    <>
    <Navbar/>
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
    <Footer/>
    </>
    
  );
};

export default Menu;
