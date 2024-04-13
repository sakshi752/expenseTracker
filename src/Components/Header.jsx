import React, { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { ExpenseTrackerContext } from "../store/expenseTracker-store";

const Header = () => {
  const { theme, toggleTheme } = useContext(ExpenseTrackerContext);

  return (
    <div className={`flex items-center justify-between mb-4`}>
      <h1 className="text-lg md:text-2xl font-bold mr-2">Expense Tracker</h1>
      <button>
      {theme === "light" ? <FaMoon className="text-black" onClick={toggleTheme} /> : <FaSun className="text-white" onClick={toggleTheme} />}
      </button>
     
    </div>
  );
};

export default Header;
