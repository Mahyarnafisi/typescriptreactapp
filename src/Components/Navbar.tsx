import react from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <ul className="menu">
        <li className="menu-list">
          <Link className="menu-link" to="/">
            Home
          </Link>
        </li>

        <li className="menu-list">
          <Link className="menu-link" to="/product">
            product
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
