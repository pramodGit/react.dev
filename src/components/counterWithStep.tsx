import React, { useState } from "react";

const CounterWithStep = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const handleIncrement = () => {
    setCount(count + step);
  };

  const handleDecrement = () => {
    setCount(count - step);
  };

  const handleReset = () => {
    setCount(0);
    setStep(1);
  };

  const handleStepChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // Parse selected step
    setStep(parseInt(e.currentTarget.value));
  };

  return (
    <div>
      <h2>Count: {count}</h2>

      <select value={step} onChange={handleStepChange}>
        <option value={1}>Step 1</option>
        <option value={5}>Step 5</option>
        <option value={10}>Step 10</option>
      </select>

      <br /><br />
      <button onClick={handleIncrement}>➕</button>
      <button onClick={handleDecrement}>➖</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default CounterWithStep;
