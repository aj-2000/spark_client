import { useState } from "react";
import { useFilters } from "context/FiltersContext";
const PriceFilter = () => {
  const { filtersState, handleFilters } = useFilters();
  const [isPriceFilterMenuOpen, setIsPriceFilterMenuOpen] =
    useState<boolean>(false);
  return (
    <div>
      <div className="relative inline-block text-left">
        <div>
          <button
            onClick={() => {
              setIsPriceFilterMenuOpen(!isPriceFilterMenuOpen);
            }}
            type="button"
            className=" border border-gray-300 bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
            id="options-menu"
          >
            {!filtersState.sortByPrice && "SORT BY PRICE"}
            {filtersState.sortByPrice && filtersState.sortByPriceAscending && "Low to High"}
            {filtersState.sortByPrice && !filtersState.sortByPriceAscending && "High to Low"}
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
            !isPriceFilterMenuOpen && "hidden"
          } origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5`}
        >
          <div
            className="py-1 "
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div
              onClick={() => {
                handleFilters({
                  sortByPrice: false,
                });
                setIsPriceFilterMenuOpen(false);
              }}
              className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
              role="menuitem"
            >
              <span className="flex flex-col">
                <span>None</span>
              </span>
            </div>
            <div
              onClick={() => {
                handleFilters({
                  sortByPrice: true,
                  sortByPriceAscending: true,
                });
                setIsPriceFilterMenuOpen(false);
              }}
              className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
              role="menuitem"
            >
              <span className="flex flex-col">
                <span>Low to High</span>
              </span>
            </div>
            <div
              onClick={() => {
                handleFilters({
                  sortByPrice: true,
                  sortByPriceAscending: false,
                });
                setIsPriceFilterMenuOpen(false);
              }}
              className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
              role="menuitem"
            >
              <span className="flex flex-col">
                <span>High to Low</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
