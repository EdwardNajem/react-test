import React from 'react';
import './footer.css';
import NewsForm from '../forms/NewsForm';

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="sb_footer section_padding">
          <div className="sb_footer-links">
            <div className="sb_footer-links-div">
              <h2>Made To Satisfy Your Experience</h2>
            </div>
            <div className="sb_footer-links-div">
              <h4>Shopping</h4>
              <a href="/shop">
                <p>Shop</p>
              </a>
              <a href="/cart">
                <p>Shopping Cart</p>
              </a>
            </div>
            <div className="sb_footer-links-div">
              <h4>General</h4>
              <a href="/">
                <p>Home</p>
              </a>
            </div>
            <div className="sb_footer-links-div">
              <h4>Forms</h4>
              <a href="/login">
                <p>Sign In</p>
              </a>
              <a href="/register">
                <p>Register</p>
              </a>
              <a href="/checkout">
                <p>Checkout</p>
              </a>
            </div>
            <div className="sb_footer-links-div">
              <h4>Subscribe To Our Newsletter</h4>
              <NewsForm />
              </div>
          </div>

          <hr></hr>

          <div className="sb_footer.below">
            <div className="sb_footer-copyright">
              <p>&copy; {new Date().getFullYear()} All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
