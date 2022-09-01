import FoodItem from "@/components/FoodItem";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react"
import { DUMMY_DATA } from "consts/dummy_data";
const styles = {
  container: "py-4 flex flex-wrap items-center justify-center"
}
const Menu = () => {
  return (
    <>
    <Navbar/>
    
    <div className={styles.container}>
      {
        DUMMY_DATA.map((data) => {
          // console.log(data.name);
          return (<FoodItem key={data.id} {...data} />)
          
        })
      }
      
    </div>
    <Footer/>
    </>
    
  );
};

export default Menu;
