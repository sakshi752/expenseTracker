import React, { createContext, useState } from "react";

export const ExpenseTrackerContext = createContext({});

const ExpenseTrackerContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  // to toggle add cancel button
  const [toggle, setToggle] = useState(false);
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [transactionType, setTransactionType] = useState("expense"); 
  const [transactions,setTransactions]=useState([]);
  const [balance,setBalance]=useState();
  const [income,setIncome]=useState();
  const [expense,setExpense]=useState();

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
    // Handle adding transactions here
    const newTransaction={
      id:Date.now(),
      amount,
      description,
      type:transactionType,
      date:new Date().toLocaleDateString()
    }
    setTransactions([...transactions,newTransaction]);
    setAmount("");
    setDescription("");
    setTransactionType("expense");

    console.log(transactions);
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
        transactions
      }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};

export default ExpenseTrackerContextProvider;
