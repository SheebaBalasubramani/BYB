import React, { useState } from "react";

const BankActions = ({ onDeposit, onWithdraw, onAddInterest, onChargeFees }) => {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");

  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };

  return (
    <div className="bank-actions">
      <div className="mb-3">
        <input
          type="number"
          className="form-control"
          placeholder="Enter amount"
          value={amount}
          onChange={handleInputChange(setAmount)}
        />
        <button className="btn btn-success mt-2" onClick={() => onDeposit(amount)}>
          Deposit
        </button>
        <button className="btn btn-danger mt-2 ms-2" onClick={() => onWithdraw(amount)}>
          Withdraw
        </button>
      </div>

      <div className="mb-3">
        <input
          type="number"
          className="form-control"
          placeholder="Enter interest rate (%)"
          value={rate}
          onChange={handleInputChange(setRate)}
        />
        <button className="btn btn-primary mt-2" onClick={() => onAddInterest(rate)}>
          Add Interest
        </button>
      </div>

      <div>
        <button
          className="btn btn-warning"
          onClick={() => onChargeFees(amount)}
        >
          Charge Bank Fees
        </button>
      </div>
    </div>
  );
};

export default BankActions;
