import { ShoppingCart } from 'phosphor-react';
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
        <NavLink to="/shop" onClick={shownavBar}>
          Shop
        </NavLink>
        <NavLink className="shop-cart-phone" to="/cart" onClick={shownavBar}>
          <ShoppingCart />
        </NavLink>
        <button className="nav-btn nav-btn-close" onClick={shownavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={shownavBar}>
        <FaBars />
      </button>
      <div className="right">
        <NavLink className="shop-cart" to="/cart" onClick={shownavBar}>
          <ShoppingCart />
        </NavLink>
        <NavLink className="sign-in" to="/login" onClick={shownavBar}>
          Sign In
        </NavLink>
      </div>
    </header>
  );
}

export default Navbar;
