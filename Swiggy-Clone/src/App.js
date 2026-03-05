import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter,Routes,Route} from 'react-router'
import Home from "./components/Home";
import Restaurant from "./components/Restaurant";
import RestaurantMenu from "./components/RestaurantMenu";
import Search from "./components/Search";
import SecondaryHome from "./components/SecondaryHome";
import { store } from "./GlobalStore/stores";
import {Provider} from "react-redux";
import Checkout from "./components/Checkout";

function App(){
    return(
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route element={<SecondaryHome></SecondaryHome>}>
                        <Route path="/restaurants" element={<Restaurant></Restaurant>}></Route>
                        <Route path="/city/delhi/:id" element={<RestaurantMenu></RestaurantMenu>}></Route>
                        <Route path="/city/delhi/:id/search" element={<Search></Search>}></Route>
                    </Route>
                    <Route path="/checkout" element={<Checkout></Checkout>}></Route>
                </Routes>
            </BrowserRouter>
       </Provider>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);