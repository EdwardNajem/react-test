import React, { useContext } from 'react';
import { LoginContext } from '../context/login-context';
import { ShopContext } from '../context/shop-context';
import DeliveryForm from '../forms/DeliveryForm';
import Navbar from '../navbar/Navbar';
import { product_card } from '../shop/product_card';
import { OrderItem } from './OrderItem';
import './checkout.css';

function Checkout() {
  const { account } = useContext(LoginContext);
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  return (
    <>
      <Navbar />
      <div className="checkout">
        <DeliveryForm />

        <div className="order-div">
          <div className="order-info">
            <div className="details">
              <h2>Account Details</h2>
              <p>Name: {account.accountname}</p>
              <p>Contact: {account.modeOfContact}</p>
            </div>
            <div className="details">
              <h2>Order Details</h2>
              <div className="item-details">
                {product_card.map((product) => {
                  if (cartItems[product.id] !== 0) {
                    return <OrderItem data={product} />;
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
