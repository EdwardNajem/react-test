import React from 'react';
import Navbar from '../navbar/Navbar';
import './home.css';
import Footer from '../footer/Footer';

function Home() {
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
            <button>Explore</button>
          </div>
        </div>
      </div>
      <div className="left-div">
        <div className="left-div-float">
          <div className="left-div-text">
            <h1>Listen To Your Needs</h1>
            <p>Here is a selection of our greatest headphones</p>
            <button>Shop Now</button>
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
