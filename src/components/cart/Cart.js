import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/shop-context';
import Navbar from '../navbar/Navbar';
import { product_card } from '../shop/product_card';
import { CartItem } from './Cart-item';
import { LoginContext } from '../context/login-context';

import './cart.css';
export default function Cart() {
  const {loggedin} = useContext(LoginContext);
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="cart">
        <div className="cart-header">
          <h1>Your Cart Items</h1>
        </div>
        <div className="carts">
          {product_card.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} />;
            }
          })}
        </div>

        {totalAmount > 0 ? (
          <div className="checkout">
            <p className="total"> Subtotal: ${totalAmount} </p>
            <button onClick={() => navigate('/shop')}>
              {' '}
              Continue Shopping{' '}
            </button>
            <button
              onClick={() => {
                navigate(loggedin ? '/checkout' : '/signin');
              }}
            >
              {' '}
              Checkout{' '}
            </button>
          </div>
        ) : (
          <h1 className="cart-header"> Your Shopping Cart is Empty</h1>
        )}
      </div>
    </>
  );
}
