import { NavLink } from "react-router-dom";

export default function AdminMenu() {
  return (
    <div className="admin-menu">
      <NavLink to="/admin">
        <h2 className="menu-header">Admin</h2>
      </NavLink>
      <div className="menu-item-container ">
        <NavLink className="light-text menu-item" to="/admin-enquiry">
          Enquiries
        </NavLink>
        <NavLink className="light-text menu-item" to="/admin-message">
          Messages
        </NavLink>
        <NavLink className="light-text menu-item" to="/admin">
          Establishment Listings
        </NavLink>
      </div>
    </div>
  );
}
