import React, { useContext, useState } from "react";
import { ExpenseTrackerContext } from "../store/expenseTracker-store";

const Balance = () => {
  const [type, setType] = useState("expense");
  const [toggle, setToggle] = useState(false);

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleAddClick = () => {
    setToggle(!toggle);
  };

  const { theme} = useContext(ExpenseTrackerContext);

  return (
    <div className="flex flex-col space-y-5">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Balance: $10000</h1>
        <button
          onClick={handleAddClick}
          className={`bg-gray-900 px-4 py-1 rounded text-white font-semibold  ${theme === "dark" ? "bg-white text-gray-900" : "bg-gray-900 text-white"} `}
        >
          {toggle ? "Cancel" : "Add"}
        </button>
      </div>
      {toggle && (
        <div className="bg-white rounded-md shadow-lg p-4">
          <form action="" className="flex flex-col space-y-3">
            <input
              className="bg-gray-200 rounded px-2 py-1 text-lg text-black outline-none"
              type="number"
              placeholder="Amount"
            />
            <input
              className="bg-gray-200 rounded px-2 py-1 text-lg text-black  outline-none"
              type="text"
              placeholder="Description"
            />
            <div className="flex space-x-5">
              <label className="text-black">
                <input
                  type="radio"
                  name="transactionType"
                  value="expense"
                  checked={type === "expense"}
                  onChange={handleTypeChange}
                />
                Expense
              </label>
              <label className="text-black">
                <input
                  type="radio"
                  name="transactionType"
                  value="income"
                  checked={type === "income"}
                  onChange={handleTypeChange}
                />
                Income
              </label>
            </div>
            <button
              className="bg-gray-900 px-4 py-1 rounded text-white font-semibold "
              type="button"
            >
              Add
            </button>
          </form>
        </div>
      )}
      <div className="flex justify-between space-x-5">
        <div className="flex flex-col bg-gray-200 p-4 rounded shadow-md w-1/2 text-center">
          <p className="text-gray-700    font-semibold text-lg">Income</p>
          <p className="text-green-500 font-bold">$5000</p>
        </div>
        <div className="flex flex-col bg-gray-200 p-4 rounded shadow-md w-1/2 text-center">
          <p className="text-gray-700 font-semibold text-xl">Expense</p>
          <p className="text-red-500 font-bold">$800</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;