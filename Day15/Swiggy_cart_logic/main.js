import ReactDOM from "react-dom/client";
import Header from "./Header";
import Cards from "./Cards";
import store from "./Swiggy-Store";
import { Provider } from "react-redux";

function App(){
    return(
        <Provider store={store}>
            <div><Header></Header></div>
            <div><Cards></Cards></div>
        </Provider>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);