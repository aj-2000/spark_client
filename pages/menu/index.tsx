import FoodItem from "@/components/FoodItem";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import supabase from "utils/supabase";
const styles = {
  container: "py-4 flex flex-wrap items-center justify-center",
};
const Menu = () => {
  const [foodItems, setFoodItems] = useState<any>([]);
  async function fetchFoodItemsData() {
    const { data, error } = await supabase.from("food_items").select();
    console.log(data);
    setFoodItems(data);
  }
  useEffect(() => {
    fetchFoodItemsData();
  }, []);
  return (
    <>
      <Navbar />

      <div className={styles.container}>
        {foodItems.map((foodItem: any) => {
          // console.log(data.name);
          return <FoodItem key={foodItem.id} {...foodItem} />;
        })}
      </div>
      <Footer />
    </>
  );
};

export default Menu;
