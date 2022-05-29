import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "../../pages/home/Home";
import Admin from "../../pages/admin/Admin";
import Establishments from "../../pages/establishments/Establishments";
import Login from "../../pages/login/Login";
import Contact from "../../pages/contact/Contact";
import Detail from "../../pages/detail/Detail";
import Searchbar from "../searchbar/Searchbar";
import Enquiry from "../admin/Enquiry";
import Message from "../admin/Message";
import AuthContext from "../../contex/AuthContex";
import { useContext } from "react";
import EnquieriesList from "../admin/EnquieriesList";
import MessageList from "../admin/MessageList";
import logo from "../../logo/holidaze-logo.png";
import AdminMenu from "../admin/AdminMenu";
import { FaSearch } from "react-icons/fa";

function Nav() {
  const [auth, setAuth] = useContext(AuthContext);

  function Logout() {
    setAuth(null);
  }

  return (
    <Router>
      <div className="nav_container">
        <nav>
          <NavLink className="nav-item logo" to="/">
            <img className="logo" src={logo} alt="Logo" />
          </NavLink>
          <div>
            <Searchbar />
          </div>
          {auth ? (
            <>
              <button className="nav-item login-button" onClick={Logout}>
                Log out
              </button>
            </>
          ) : (
            <NavLink className="nav-item login-button" to="/login">
              Login
            </NavLink>
          )}
        </nav>
        {auth ? (
          <>
            <AdminMenu />
          </>
        ) : (
          <></>
        )}

        <div className="bottom-nav">
          <NavLink className="bottom-nav-item search" to="/">
            <FaSearch />
          </NavLink>
          <NavLink className="bottom-nav-item" to="/">
            <img className="small-logo" src={logo} alt="Logo" />
          </NavLink>
          <NavLink className="bottom-nav-item small-login" to="/login">
            Login
          </NavLink>
        </div>

        <Routes>
          <Route path="/establishments/detail/:id" element={<Detail />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/login" element={<Login />} />

          <Route path="/establishments" element={<Establishments />} />

          <Route path="/admin" element={<Admin />} />

          <Route path="/admin-enquiry/:id" element={<Enquiry />} />

          <Route path="/admin-message/:id" element={<Message />} />

          <Route path="/admin-enquiry" element={<EnquieriesList />} />

          <Route path="/admin-message" element={<MessageList />} />

          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Nav;

/*<Route path="/??/:id" element={<Detail />} />*/
