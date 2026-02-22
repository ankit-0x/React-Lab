import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Colorful from "./src/component/colorful";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="counter">
        <h1>Count is: {count}</h1>
        <button
          onClick={() => setCount(count + 1)}
          style={{ backgroundColor: "royalblue", color: "white" }}
        >
          Increment
        </button>
      </div>

      <Colorful /> {/*function call*/}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Counter />);
