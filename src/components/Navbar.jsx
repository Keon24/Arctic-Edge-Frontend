import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from "../assets/logo40.png";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link to ="/">
        <img src={logo} alt="logo"/>
        </Link>
      </div>

      <ul className={`nav-menu ${menuVisible ? 'active' : ''}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
        <li><Link to="/heating" onClick={toggleMenu}>Heating</Link></li>
        <li><Link to="/cooling" onClick={toggleMenu}>Cooling</Link></li>
        <li><Link to="/ventilation" onClick={toggleMenu}>Ventilation</Link></li>
        <li><Link to="/appointment" onClick={toggleMenu}>Appointment</Link></li>
      </ul>

    
      <div className="sign-up-link">
        <Link to="/auth">Sign Up</Link>
      </div>

      <div className={`hamburger-menu ${menuVisible ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
}

export default Navbar;
