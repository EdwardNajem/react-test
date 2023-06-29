import React, { useContext } from 'react';
import { ShopContext } from '../context/shop-context';

export const CartItem = (props) => {
  const { id, product_name, price, thumb, currency } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={thumb} />
      <div className="description">
        <p>
          <b>{product_name}</b>
        </p>
        <p> Price: {price}{currency}</p>
        <div className="countHandler">
          <button className="counting" onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button className="counting" onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};
