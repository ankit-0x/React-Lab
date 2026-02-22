import React from "react";
import ReactDOM from "react-dom/client";
import Counting from "./Counting";
import store from "./store";
import { Provider } from "react-redux";
import CustomIncreaser from "./CustomIncreaser";

function App(){
    return(
        <>
            <Provider store={store}>
                <Counting />  
                <br></br>  
                <br></br>  
                <br></br>  
                <br></br>  
                <CustomIncreaser></CustomIncreaser>
            </Provider>
        </>
    );
}


ReactDOM.createRoot(document.getElementById('root')).render(<App />);