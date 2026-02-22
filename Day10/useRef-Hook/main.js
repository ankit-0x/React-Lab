import {useState,useRef} from "react";
import ReactDOM from "react-dom/client";

function App(){
    const [count,setCount] = useState(0);
    // let money = 0;
    let money = useRef(0);
    console.log(money);

    return(
        <>
        <h1>Count: {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        {/* <h1>Money: {money}</h1>
        <button onClick={()=>{
            money=money+1;
            console.log(money);
            }}>Increment</button>
        </> */}
        <h1>Money: {money.current}</h1>
        <button onClick={()=> money.current=money.current+1}>Increment</button>
        </>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);