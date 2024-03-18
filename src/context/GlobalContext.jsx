import { createContext, useContext, useState } from "react";

const GlobalContext = createContext(null);

export const GlobalContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <GlobalContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
