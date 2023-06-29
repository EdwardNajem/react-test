import React from 'react';
import Navbar from '../navbar/Navbar';
import product_card from './product_card';
import './shoppage.css';
import Footer from '../footer/Footer';

const ShopPage = () => {
  console.log(product_card);
  const listItems = product_card.map((item) => (
    <div className="card" key={item.id}>
      <div className="card_img">
        <img src={item.thumb} alt={item.product_name} />
      </div>
      <div className="card_header">
        <h2>{item.product_name}</h2>
        <p>{item.description}</p>
        <p className="price">
          {item.price}
          <span>{item.currency}</span>
        </p>
        <div className="btn">Add To Cart</div>
      </div>
    </div>
  ));
  return (
    <>
      <Navbar />
      <div className="main_content">{listItems}</div>
      <Footer />
    </>
  );
};

export default ShopPage;
