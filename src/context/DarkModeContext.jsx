import React, { createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
const DarkModeContext = createContext();
function DarkModeContextProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(false, "isDarkMode");
  useEffect(
    function () {
      if (isDarkMode) {
        document.documentElement.classList.add("dark-mode");
        document.documentElement.classList.remove("light-mode");
      } else {
        document.documentElement.classList.add("light-mode");
        document.documentElement.classList.remove("dark-mode");
      }
    },
    [isDarkMode]
  );
  function darkModeToggle() {
    setIsDarkMode((isDark) => !isDark);
  }
  return (
    <DarkModeContext.Provider value={{ isDarkMode, darkModeToggle }}>
      {children}
    </DarkModeContext.Provider>
  );
}
function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error("Dark mode context is used outside");
  return context;
}
export { useDarkMode, DarkModeContextProvider };
