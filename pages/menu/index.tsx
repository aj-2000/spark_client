import Accordion from "@/components/Accordion";
import Carousel from "@/components/Carousel";
import Filters from "@/components/Filters";
import FoodItem from "@/components/FoodItem";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TopWeeklyItems from "@/components/TopWeeklyItems";
import { useFilters } from "context/FiltersContext";
import React, { useEffect, useState } from "react";
import supabase from "utils/supabase";
const styles = {
  container: "py-4 flex flex-wrap items-center justify-center",
  backgroundShade: "bg-gray-100 rounded-xl m-4",
};
const Menu = () => {
  const [foodItems, setFoodItems] = useState<any>([]);
  const [topWeeklyFoodItems, setTopWeeklyFoodItems] = useState<any>([]);
  const { filtersState, handleFilters } = useFilters();
  async function fetchFoodItemsData() {
    if (!filtersState.filterByCategory && !filtersState.sortByPrice) {
      await supabase
        .from("food_items")
        .select()
        .then(({ data, error }) => {
          if (!error) {
            setFoodItems(data);
          } else {
            console.log(error);
          }
        });
    } else if (filtersState.filterByCategory && !filtersState.sortByPrice) {
      await supabase
        .from("food_items")
        .select()
        .match({ category: filtersState.category })
        .then(({ data, error }) => {
          if (!error) {
            setFoodItems(data);
          } else {
            console.log(error);
          }
        });
    } else if (!filtersState.filterByCategory && filtersState.sortByPrice) {
      await supabase
        .from("food_items")
        .select()
        .order("price", { ascending: filtersState.sortByPriceAscending })
        .then(({ data, error }) => {
          if (!error) {
            setFoodItems(data);
          } else {
            console.log(error);
          }
        });
    } else if (filtersState.filterByCategory && filtersState.sortByPrice) {
      await supabase
        .from("food_items")
        .select()
        .match({ category: filtersState.category })
        .order("price", { ascending: filtersState.sortByPriceAscending })
        .then(({ data, error }) => {
          if (!error) {
            setFoodItems(data);
          } else {
            console.log(error);
          }
        });
    }
  }
  const fetchTopWeeklyFoodItems = async () => {
    await supabase
      .from("food_items")
      .select()
      .order("weekly_orders", { ascending: false })
      .then(({ data, error }) => {
        if (!error) {
          setTopWeeklyFoodItems(data);
        } else {
          console.log(error);
        }
      });
  };
  useEffect(() => {
    fetchFoodItemsData();
  }, [filtersState]);
  useEffect(() => {
    fetchTopWeeklyFoodItems();
  }, []);
  return (
    <>
      <Navbar />
      <Carousel />
      <TopWeeklyItems>
        <div className={styles.container}>
          {topWeeklyFoodItems.slice(0, 4).map((foodItem: any) => {
            // console.log(data.name);
            return <FoodItem key={`${foodItem.id}twfi`} {...foodItem} />;
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
      <Accordion />
      <Footer />
    </>
  );
};

export default Menu;
