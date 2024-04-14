import React, { useContext } from "react";
import { ExpenseTrackerContext } from "../store/expenseTracker-store";

const Transactions = () => {
  const { transactions } = useContext(ExpenseTrackerContext);

  return (
    <div>
      <div className="flex flex-col items-center mt-7 space-y-2">
        <h1 className="font-bold text-xl tracking-wide">Your Transactions</h1>
        <input
          className="bg-gray-200 rounded px-2 py-1 text-lg text-black outline-none w-full"
          type="search"
          name=""
          id=""
          placeholder="Search your transactions"
        />
      </div>

      <div className="flex flex-col space-y-5 mt-5">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex justify-between bg-gray-200 rounded text-gray-900 px-1 py-2">
            <div>
              <p className="text-lg font-semibold text-gray-900">{transaction.description}</p>
              <p className="font-semibold text-gray-900">{transaction.date}</p>
            </div>
            <p className="font-semibold text-gray-900">{transaction.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;
