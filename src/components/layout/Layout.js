import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "../home/Home";
import Admin from "../admin/Admin";
import Establishments from "../establishments/Establishments";
import Login from "../login/Login";
import Contact from "../contact/Contact";
import Detail from "../detail/Detail";
import LoginButton from "../login/LoginButton";
import dropdownProfil from "../login/LoginButton";

function Layout() {
  return (
    <Router>
      <div className="nav_container">
        <nav>
          <NavLink className="nav-item logo" to="/">
            HOLIDAZE
          </NavLink>
          <div>
            <input
              id="searchbar"
              className="searchbar"
              placeholder="Search hotels here..."
            />
          </div>
          <NavLink className="nav-item login" to="/login">
            Login
          </NavLink>
        </nav>

        <div className="bottom-nav">
          <NavLink className="bottom-nav-item search" to="/">
            Search
          </NavLink>
          <NavLink className="bottom-nav-item small-logo" to="/">
            HOLIDAZE
          </NavLink>
          <NavLink className="bottom-nav-item small-login" to="/login">
            Login
          </NavLink>
        </div>

        <Routes>
          <Route path="/detail" element={<Detail />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/login" element={<Login />} />

          <Route path="/establishments" element={<Establishments />} />

          <Route path="/admin" element={<Admin />} />

          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Layout;

/*<Route path="/??/:id" element={<Detail />} />*/
