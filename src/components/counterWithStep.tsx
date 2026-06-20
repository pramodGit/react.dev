import React, { useState } from "react";
import '../assets/codeExamples.css';

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

  const code = `
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

      return {
        <>
          <select value={step} onChange={handleStepChange}>
            <option value={1}>Step 1</option>
            <option value={5}>Step 5</option>
            <option value={10}>Step 10</option>
          </select>

          <div className="buttons">
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleReset}>Reset</button>
          </div>
        </>
      }
    }

  `;

  return (
    <>
      <div className="grid-2">
        <div className="counter">
          <h2>Counter: {count}</h2>

          <select value={step} onChange={handleStepChange}>
            <option value={1}>Step 1</option>
            <option value={5}>Step 5</option>
            <option value={10}>Step 10</option>
          </select>

          <div className="buttons">
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleReset}>Reset</button>
          </div>

        </div>
        <pre>
          <code>
            { code }
          </code>
        </pre>
      </div>
      <div className="grid-1">
        <b><a href="https://dev.pramod.click/angular/signalStateManagement" target="_blank">Angular Implementaion</a></b>
        <b>useState → signal()</b>
      </div>
    </>
  );
};

export default CounterWithStep;
