import React, { useContext } from 'react';
import { ShopContext } from '../context/shop-context';

export const OrderItem = (props) => {
  const { id, product_name, price, currency } = props.data;
  const { cartItems } = useContext(ShopContext);

  return (
    <div className="orderItem">
      <div className="description">
        <p>
          <b>{product_name}</b>
        </p>
        <p>
          {' '}
          Price: {price}
          {currency}
        </p>
        <p>Amount: {cartItems[id]}</p>
      </div>
    </div>
  );
};
