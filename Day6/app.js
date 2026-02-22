import React from "react";
import ReactDOM from "react-dom/client";
import {useState} from "react";

function Counter(){
    const [count,setCount] = useState(0);

    function incrementer(){
        setCount(count+1);
    }
    function decrementer(){
        setCount(count-1);
    }
    return(
        <div className="container">
            <h1>Count: {count}</h1>
            <button className="btn" onClick={incrementer}>Increase</button>
            <button className="btn" onClick={decrementer}>decrease</button>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Counter />);