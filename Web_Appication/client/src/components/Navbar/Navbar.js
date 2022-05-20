import React, { useState } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/home" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/user-list" className="nav-links" onClick={closeMobileMenu}>
              จัดการผู้ใช้ 
            </Link>

          </li>
          <li className="nav-item">
            <Link
              to="/room-list"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              จัดการห้อง
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/room-request" className="nav-links" onClick={closeMobileMenu}>
              จัดการคำขอ
            </Link>
          </li>
        </ul>

        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          Room Reservation
          <i class="fab fa-firstdraft" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
