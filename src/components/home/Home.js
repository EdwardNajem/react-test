import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../context/login-context';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import './home.css';

function Home() {
  const navigate = useNavigate();
  const { loggedin } = useContext(LoginContext);
  return (
    <>
      <Navbar />
      <div className="home-hero">
        <div className="home-hero-info">
          <div className="home-hero-img">
            <img src="./1.png" alt="Headphones" />
          </div>
          <div className="home-hero-text">
            <h1>Welcome</h1>
            <p>Here is a selection of our greatest headphones</p>
            <button onClick={() => navigate( '/shop' )}>
              Explore
            </button>
          </div>
        </div>
      </div>
      <div className="left-div">
        <div className="left-div-float">
          <div className="left-div-text">
            <h1>Listen To Your Needs</h1>
            <p>Here is a selection of our greatest headphones</p>
            <button onClick={() => navigate( '/shop' )}>
              Shop Now
            </button>
          </div>
        </div>
        <div className="left-div-float">
          <img src="2.png" alt="Headphones" />
        </div>
      </div>
      <div className="right-div"></div>
      <Footer />
    </>
  );
}

export default Home;
