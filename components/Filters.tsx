import React from "react";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
const styles = {
  container: "m-2",
  contentBox: "flex justify-between p-4",
  heading: "font-thin text-3xl",
  filtersBox: "flex justify-between gap-x-8",
};
const Filters = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentBox}>
        <p className={styles.heading}>Filters</p>
        <div className={styles.filtersBox}>
          <CategoryFilter />
          <PriceFilter />
        </div>
      </div>
    </div>
  );
};

export default Filters;
