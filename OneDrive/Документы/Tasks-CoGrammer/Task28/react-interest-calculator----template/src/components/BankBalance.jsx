import React, { useState } from "react";

const BankBalance = ({ balance }) => {
  return (
    <div className="mb-4">
      <h2>Current Balance: £{balance.toFixed(2)}</h2>
    </div>
  );
};

export default BankBalance;
