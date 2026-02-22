import { useState, useRef } from "react";
import ReactDOM from "react-dom/client";

function StopWatch() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);
  function start() {
    if (intervalRef.current !== null) return;
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    
  }

  function stop() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  function reset() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTime(0);
  }

  return (
    <>
      <h1>StopWatch: {time}</h1>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<StopWatch />);
