import React, { createContext, useState } from "react";

export const ExpenseTrackerContext = createContext({});

const ExpenseTrackerContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ExpenseTrackerContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ExpenseTrackerContext.Provider>
  );
};

export default ExpenseTrackerContextProvider;
