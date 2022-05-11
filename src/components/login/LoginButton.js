/*import { NavLink } from "react-router-dom";

function LoginButton() {
  const dropdownContent = document.getElementById("profilBtn");

  function dropdownProfil() {
    dropdownContent.classList.toggle("show");
  }

  return (
    <div>
      <button onClick={dropdownProfil()} id="profilBtn" className="profilbtn">
        Profil
      </button>
      <div id="profilDropdown" className="profil-dropdown-content">
        <NavLink className="nav-item login" to="/login">
          Login
        </NavLink>
      </div>
    </div>
  );
}

export default LoginButton;
*/

const dropdownContent = document.getElementById("profilDropdown");

export default function dropdownProfil() {
  dropdownContent.classList.toggle("show");
}
