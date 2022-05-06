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
import Contact from "../contact/contact";
import Detail from "../detail/Detail";

function Layout() {
  return (
    <Router>
      <div className="nav_container">
        <nav>
          <NavLink className="nav-item" to="/">
            HOLIDAZE
          </NavLink>
          <div>
            <input className="searchbar" placeholder="Search hotels here..." />
          </div>
          <NavLink className="nav-item" to="/login">
            Login
          </NavLink>
        </nav>

        <Routes>
          <Route path="/??/:id" element={<Detail />} />

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
