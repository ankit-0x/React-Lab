import { useState } from "react";
import { useDispatch } from "react-redux";
import { CustomIncrease } from "./slice1";

function CustomIncreaser() {
    const [number,setNumber] = useState("");
    const dispatch = useDispatch();
    function handle(){
        dispatch(CustomIncrease(Number(number)));
        setNumber("");
    }

  return (
    <>
      <input type="number" value={number} onChange={(e)=>{setNumber(e.target.value);}}></input>
      <button onClick={handle}>Submit</button>
    </>
  );
}

export default CustomIncreaser;
