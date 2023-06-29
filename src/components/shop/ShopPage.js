import React from 'react';
import Navbar from '../navbar/Navbar';
import product_card from './product_card';
import './shoppage.css';
import Footer from '../footer/Footer';
import Product from './Product';

const ShopPage = () => {
  console.log(product_card);
  const listItems = product_card.map((item) => (
    <Product data={item}/>  
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
