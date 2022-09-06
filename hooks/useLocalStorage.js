const useLocalStorage = () => {
    const getItem = (key) => {
      const localItem = localStorage.getItem(key);
      if (localItem) {
        return JSON.parse(localItem);
      }
      return null;
    };
  
    const setItem = (key, value) => {
      localStorage.setItem(key, JSON.stringify(value));
    };
  
    const removeItem = (key) => {
      localStorage.removeItem(key);
    };
  
    return {
      getItem,
      setItem,
      removeItem,
    };
  };
  
  export default useLocalStorage;