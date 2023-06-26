import React, { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink, Link } from 'react-router-dom';
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
    </header>
  );
}

export default Navbar;
