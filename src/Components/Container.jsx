import React, { useContext } from "react";
import { ExpenseTrackerContext } from "../store/expenseTracker-store";

const Container = ({ children }) => {
  const { theme} = useContext(ExpenseTrackerContext);
  return(
    <div className={` w-[95%] md:w-[50%] lg:w-[40%] mx-auto my-4 rounded p-3 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"} shadow-lg `}>{children}</div>
  ) 
};

export default Container;
