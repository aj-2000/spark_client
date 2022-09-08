import Accordion from "@/components/Accordion";
import Carousel  from "@/components/Carousel"
import Filters from "@/components/Filters";
import FoodItem from "@/components/FoodItem";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TopWeeklyItems from "@/components/TopWeeklyItems";
import React, { useEffect, useState } from "react";
import supabase from "utils/supabase";
const styles = {
  container: "py-4 flex flex-wrap items-center justify-center",
  backgroundShade: "bg-gray-100 rounded-xl m-4",
};
const Menu = () => {
  const [foodItems, setFoodItems] = useState<any>([]);
  // let topWeeklyItems = [];
  async function fetchFoodItemsData() {
    const { data, error } = await supabase.from("food_items").select();
    console.log(data);
    setFoodItems(data);
  }
  useEffect(() => {
    fetchFoodItemsData()
      .then
      // topWeeklyItems = foodItems.subarray(0,3)
      ();
  }, []);
  return (
    <>
      <Navbar />
      <Carousel />
      <TopWeeklyItems>
        <div className={styles.container}>
          {foodItems.slice(2, 6).map((foodItem: any) => {
            // console.log(data.name);
            return <FoodItem key={foodItem.id} {...foodItem} />;
          })}
        </div>
      </TopWeeklyItems>
      <Filters />
      <div className={`${styles.container} ${styles.backgroundShade}`}>
        {foodItems.map((foodItem: any) => {
          // console.log(data.name);
          return <FoodItem key={foodItem.id} {...foodItem} />;
        })}
      </div>
      <Accordion/>
      <Footer />
    </>
  );
};

export default Menu;
