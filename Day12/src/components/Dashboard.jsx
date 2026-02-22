import { Outlet,Link } from "react-router";

function Dashboard() {
  return (
    <div>
       <nav>
            {/* <Link to="/Dashboard">Dashboard</Link>
            <Link to="/Dashboard/Profile">Profile</Link>
            <Link to="/Dashboard/Settings">Setting</Link> */}
            <Link to="">Dashboard</Link>
            <Link to="Profile">Profile</Link>
            <Link to="Settings">Settings</Link>
        </nav> 
      <h2>Dashboard Page</h2>
      <Outlet />
    </div>
  );
}

export default Dashboard;
