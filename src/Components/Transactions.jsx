import React, { useContext } from "react";
import { ExpenseTrackerContext } from "../store/expenseTracker-store";
import TransactionCard from "./TransactionCard";

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
          <TransactionCard
            key={transaction.id}
            id={transaction.id}
            description={transaction.description}
            amount={transaction.amount}
            type={transaction.type}
            date={transaction.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Transactions;
