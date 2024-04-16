import React, { useContext } from "react";
import { ExpenseTrackerContext } from "../store/expenseTracker-store";
import TransactionCard from "./TransactionCard";

const Transactions = () => {
  const { theme, transactions, search, setSearch, handleSearch, handleAll,clearTransactions } = useContext(ExpenseTrackerContext);
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center mt-7 space-y-2">
        <h1 className="font-bold text-xl tracking-wide">Your Transactions</h1>
        <form action="" className="w-full flex justify-between space-x-4">
          <input
            className="bg-gray-200 rounded px-2 py-1 text-lg text-black outline-none w-3/4"
            type="search"
            name=""
            id=""
            placeholder="Search your transactions"
            value={search}
            onChange={handleSearchChange}
          />
          <button type="button"
            className={`bg-gray-900 px-4 py-1 rounded font-semibold  ${theme === "dark"
                ? "bg-white text-gray-900"
                : "bg-gray-900 text-white"
              } `}
            onClick={handleSearch}
          >search</button>
          <button type="button"
            className={`bg-gray-900 px-4 py-1 rounded font-semibold  ${theme === "dark"
                ? "bg-white text-gray-900"
                : "bg-gray-900 text-white"
              } `}
            onClick={handleAll}
          >All</button>
        </form>

      </div>

      {transactions.length !== 0 ? (
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
      ) : (
        <p className="mt-5 text-center font-semibold tracking-wide text-lg">Currently no transactions to show!</p>
      )}

      <button
        className={`bg-gray-900 mt-3 px-4 py-1 rounded font-semibold  ${theme === "dark"
            ? "bg-white text-gray-900"
            : "bg-gray-900 text-white"
          } w-1/4 mx-auto`}
          onClick={clearTransactions}
      >Clear all</button>
    </div>
  );
};

export default Transactions;
