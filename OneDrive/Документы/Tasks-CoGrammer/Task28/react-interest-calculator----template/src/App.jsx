import React, { useState } from "react";
import BankBalance from "./components/BankBalance";
import BankActions from "./components/BankActions";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [balance, setBalance] = useState(0);

  const handleDeposit = (amount) => setBalance((prev) => prev + parseFloat(amount));
  const handleWithdraw = (amount) => {
    const newBalance = balance - parseFloat(amount);
    if (newBalance < 0) alert("Warning: Your balance will go negative!");
    setBalance(newBalance);
  };
  const handleAddInterest = (rate) => setBalance((prev) => prev + (prev * parseFloat(rate)) / 100);
  const handleChargeFees = (fee) => {
    const newBalance = balance - parseFloat(fee);
    if (newBalance < 0) alert("Warning: Your balance will go negative!");
    setBalance(newBalance);
  };

  return (
    <div className="container text-center mt-5">
      <h1>Banking System</h1>
      <BankBalance balance={balance} />
      <BankActions
        onDeposit={handleDeposit}
        onWithdraw={handleWithdraw}
        onAddInterest={handleAddInterest}
        onChargeFees={handleChargeFees}
      />
    </div>
  );
};

export default App;
