import { createContext, ReactNode, useContext, useState } from "react";

type filtersState = {
  filterByCategory: boolean;
  category: string;
  sortByPrice: boolean;
  sortByPriceAscending: boolean;
};

type filtersContextType = {
  filtersState: filtersState;
  handleFilters: (newFiltersState: any) => void;
};

const filtersContextDefaultValues: filtersContextType = {
  filtersState: {
    filterByCategory: false,
    category: "category",
    sortByPrice: false,
    sortByPriceAscending: false,
  },
  handleFilters: (newFiltersState: any) => {},
};

const FiltersContext = createContext<filtersContextType>(
  filtersContextDefaultValues
);

export function useFilters() {
  return useContext(FiltersContext);
}

type Props = {
  children: ReactNode;
};

export function FiltersProvider({ children }: Props) {
  const [filtersState, setFiltersState] = useState<filtersState>({
    filterByCategory: false,
    category: "",
    sortByPrice: false,
    sortByPriceAscending: false,
  });
  const handleFilters = (newFiltersState: any) => {
     console.log('handleFilters');
     const oldFiltersState = filtersState
    setFiltersState({ ...filtersState,...newFiltersState });
  };
  const value = {
    filtersState,
    handleFilters,
  };

  return (
    <>
      <FiltersContext.Provider value={value}>
        {children}
      </FiltersContext.Provider>
    </>
  );
}
