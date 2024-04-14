import React, { createContext, useEffect, useState } from "react";

export const ExpenseTrackerContext = createContext({});

const ExpenseTrackerContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  // to toggle add cancel button
  const [toggle, setToggle] = useState(false);
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [transactionType, setTransactionType] = useState("expense");
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [search,setSearch]=useState("");

  useEffect(() => {
    const storedTransactions = JSON.parse(localStorage.getItem("Transactions"));
    if (storedTransactions) {
      setTransactions(storedTransactions);
      setBalance(JSON.parse(localStorage.getItem("Balance")));
      setIncome(JSON.parse(localStorage.getItem("Income")));
      setExpense(JSON.parse(localStorage.getItem("Expense")));
    }
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleAddClick = () => {
    setToggle(!toggle);
    if (!toggle) {
      setAmount("");
      setDescription("");
      setTransactionType("expense");
    }
  };

  const handleAddTransactions = () => {
    const transactionAmount = parseFloat(amount);
    const newBalance =
      balance +
      (transactionType === "income" ? transactionAmount : -transactionAmount);
    const newIncome =
      transactionType === "income" ? income + transactionAmount : income;
    const newExpense =
      transactionType === "expense" ? expense + transactionAmount : expense;

    if (amount !== "" && description !== "" && transactionType !== "") {
      if (newBalance >= 0) {
        const newTransaction = {
          id: Date.now(),
          amount: transactionAmount,
          description,
          type: transactionType,
          date: new Date().toLocaleDateString(),
        };
        setTransactions([...transactions, newTransaction]);
        setBalance(newBalance);
        setIncome(newIncome);
        setExpense(newExpense);
        setAmount("");
        setDescription("");
        setTransactionType("expense");
        window.localStorage.setItem(
          "Transactions",
          JSON.stringify([...transactions, newTransaction])
        );
        window.localStorage.setItem("Balance", newBalance);
        window.localStorage.setItem("Income", newIncome);
        window.localStorage.setItem("Expense", newExpense);
      }
       else {
        alert("your balance amount is less than your expense");
        setAmount("");
        setDescription("");
        setTransactionType("expense");
      }
    } else {
      alert("please enter all fields");
    }
  };

  return (
    <ExpenseTrackerContext.Provider
      value={{
        theme,
        toggleTheme,
        toggle,
        handleAddClick,
        handleAddTransactions,
        amount,
        setAmount,
        description,
        setDescription,
        transactionType,
        setTransactionType,
        transactions,
        balance,
        expense,
        income,
      }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};

export default ExpenseTrackerContextProvider;
