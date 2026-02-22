import React, { useState, useMemo } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState("");

  function fib(n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
  }

  const fibResult = useMemo(()=>fib(number),[number]);

  return (
    <div className="app-container">
      <h1 className="title">Counter + Fibonacci</h1>

      <div className="counter-box">
        <h2 className="count-text">Count: {count}</h2>
        <div className="btn-group">
          <button
            className="btn increment"
            onClick={() => setCount(count + 1)}
          >
            Increment
          </button>
          <button
            className="btn decrement"
            onClick={() => setCount(count - 1)}
          >
            Decrement
          </button>
        </div>
      </div>

      <div className="fib-box">
        <h2 className="fib-text">Fibonacci: {fibResult}</h2>
        <input
          className="input-number"
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter number"
        />
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
