import React from 'react';
import { NavLink } from 'react-router-dom';
import './footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="sb_footer section_padding">
          <div className="sb_footer-links">
            <div className="sb_footer-links-div">
              <h4>Pages</h4>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/shop">Shop</NavLink>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/register">Register</NavLink>
            </div>
          </div>
        </div>

        <hr></hr>

        <div className="sb_footer.below">
          <div className="sb_footer-copyright">
            <p>&copy; {new Date().getFullYear()} All rights reserved</p>
          </div>
          <div className="sb_footer-below-links">
            <a>Terms and Conditions</a>
            <a>Services and Payment</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
