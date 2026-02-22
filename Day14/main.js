import React from "react";
import ReactDOM from "react-dom/client";
import Counting from "./Counting";
import store from "./store";
import { Provider } from "react-redux";

function App(){
    return(
        <>
            <Provider store={store}>
                <Counting />    
            </Provider>
        </>
    );
}


ReactDOM.createRoot(document.getElementById('root')).render(<App />);