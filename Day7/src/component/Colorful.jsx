import {useState,useEffect} from "react";

function Colorful(){
    const [color,setColor] = useState("black");

    console.log("render");
    // useEffect(callback , dependency)
    useEffect(()=>{
        console.log("Use Effect")
        document.body.style.backgroundColor= color;
    },[color]);

    console.log("last");

    return(
        <>
            <h1>Background Color Changer</h1>
            <div className="btn">
                <button style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
                <button style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>
                <button style={{backgroundColor:"yellow"}} onClick={()=>setColor("yellow")}>Yellow</button>
                <button style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
                <button style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")}>Orange</button>
            </div>
        </>
    );
}

export default  React.memo(Colorful);