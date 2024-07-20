import React, { useState } from "react";
import "./ButtonDI.css";

export default function ButtonDI() {
  const [amount, setAmount] = useState(0);
  const handleMinus = () => {
    if (amount > 0) setAmount(amount - 1);
  };
  const handlePlus = () => setAmount(amount + 1);
  return (
    <div className="button_DI">
      <button className="minus">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-6"
          onClick={handleMinus}
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
        </svg>
      </button>

      <span className="amount">{amount}</span>
      <button className="plus">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-6"
          onClick={handlePlus}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </div>
  );
}
