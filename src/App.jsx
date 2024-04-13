import { FaMoon, FaSun } from "react-icons/fa";
import Container from "./Components/Container";
import Header from "./Components/Header";
import Balance from "./Components/Balance";
import ExpenseTrackerContextProvider from "./store/expenseTracker-store";
import Transactions from "./Components/Transactions";

function App() {
  return (
    <>
      <ExpenseTrackerContextProvider>
        <Container>
          <Header />
          <Balance />
          <Transactions/>
        </Container>
      </ExpenseTrackerContextProvider>
    </>
  );
}

export default App;
