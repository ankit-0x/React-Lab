import React from "react";
import ReactDOM from "react-dom/client";

function greet(name){
    // return <h1>Hello {let x = 2;}</h1> // js statements not allowed only expression which produces results : string, number, arr
    return <h1>Hello {name}</h1>
}

const element = greet("Ankit");


let obj ={
    name: "Ankit Kumar",
    age: 20
};

function greet1(){
    // return <h1>Hello {obj}</h1> // gives error code not works
    return <h1>Hello {obj.name}. You are {obj.age} years old</h1>
}

const element1 = greet1();

const arr = [10,20,"How are you?",50];

function greet2(){
    return <h1>Hello {arr}</h1>
}

const element2 = greet2();

function Greet(){
    return <h1>Hello coders</h1>
}

const element3 = <Greet/>

// props is an object which catch arguments from call and store them as object properties key:value pairs
// props = {
//     name: "Ankit Kumar",
//     age: "20"
// }

function Greeta(props){
    return <h1>Hello coder. You name is {props.name}. you are {props.age} years old</h1>
}

const element4 = <Greeta name = "Ankit Kumar" age = "20"/>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element4);