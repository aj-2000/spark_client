import { categories } from "consts/categories";
import { useFilters } from "context/FiltersContext";
import { useState } from "react";

const CategoryFilter = () => {
  const { filtersState, handleFilters } = useFilters();
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState<boolean>(false);
  return (
    <div>
      <div className="relative inline-block text-left">
        <div>
          <button
            onClick={() => {
              setIsCategoryMenuOpen(!isCategoryMenuOpen);
            }}
            type="button"
            className=" border border-gray-300 bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
            id="options-menu"
          >
            {filtersState.category || "CATEGORY"}
            <svg
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"></path>
            </svg>
          </button>
        </div>
        <div
          className={`${
            !isCategoryMenuOpen && "hidden"
          } origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5`}
        >
          <div
            className="py-1 "
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          ></div>
          <div
            onClick={() => {
              handleFilters({ category: "", filterByCategory: false });
              setIsCategoryMenuOpen(false);
            }}
            className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
            role="menuitem"
          >
            <span className="flex flex-col">
              <span>None</span>
            </span>
          </div>
          <div
            className="py-1 "
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {categories.map((category) => {
              return (
                <div
                  onClick={() => {
                    handleFilters({
                      category: category,
                      filterByCategory: true,
                    });
                    setIsCategoryMenuOpen(false);
                  }}
                  className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                  role="menuitem"
                >
                  <span className="flex flex-col">
                    <span>{category}</span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
