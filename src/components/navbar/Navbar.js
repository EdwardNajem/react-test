import React, { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import '../navbar/navbar.css';

function Navbar() {
  const navRef = useRef();

  const shownavBar = () => {
    navRef.current.classList.toggle('responsive_navbar');
  };

  return (
    <header>
      <Link to="/">
        <h1>Logo</h1>
      </Link>
      <nav ref={navRef}>
        <NavLink className="sign-in-phone " to="/login" onClick={shownavBar}>
          Sign In
        </NavLink>
        
        <NavLink to="/" onClick={shownavBar}>
          Home
        </NavLink>
        <button className="nav-btn nav-btn-close" onClick={shownavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={shownavBar}>
        <FaBars />
      </button>
      <NavLink className="sign-in" to="/login" onClick={shownavBar}>
        Sign In
      </NavLink>
    </header>
  );
}

export default Navbar;
