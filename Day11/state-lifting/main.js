import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Increment from "./Increment";
import Decrement from "./Decrement";

function CounterParent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <Increment counts={count} setCount={setCount} />
      <Decrement counts={count} setCount={setCount} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<CounterParent />);
