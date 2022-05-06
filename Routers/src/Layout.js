import { Outlet, Link } from "react-router-dom";
function Layout() {
    return (
      <div>
        <nav>
              <Link to="/">Home</Link>&nbsp;|
              <Link to="/about">About</Link>&nbsp;|
              <Link to="/dashboard">Dashboard</Link>
        </nav>
  
        <hr />
        <Outlet />
      </div>
    );
  }
  export default Layout;