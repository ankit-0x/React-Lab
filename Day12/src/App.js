import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter,Routes,Route,Link,NavLink} from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Dashboard from "./components/Dashboard";
import DashboardHome from "./components/DashboardHome";
import Profile from "./components/Profile";
import Settings from "./components/Settings";

function App() {
  return (
    <BrowserRouter>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/Dashboard">Dashboard</Link>
        </nav>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/About" element={<About></About>}></Route>
            <Route path="/Contact" element={<Contact></Contact>}></Route>
            <Route path="/Dashboard" element={<Dashboard></Dashboard>}>
                <Route index element={<DashboardHome></DashboardHome>}/>
                <Route path="Profile" element={<Profile></Profile>} />
                <Route path="Settings" element={<Settings></Settings>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
