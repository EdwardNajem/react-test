import React, {useContext} from 'react'
import { ShopContext } from '../context/shop-context';

function Product(props) { 
   const {id, thumb, product_name, price, description, currency} = props.data;
   const { addToCart, cartItems } = useContext(ShopContext);
   const cartItemCount = cartItems[id];
  return (
    <div className="card" key={id}>
      <div className="card_img">
        <img src={thumb} alt={product_name} />
      </div>
      <div className="card_header">
        <h2>{product_name}</h2>
        <p>{description}</p>
        <p className="price">
          {price}
          <span>{currency}</span>
        </p>
        <button className="btn" onClick={() => addToCart(id)}>
          Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
        </button>
      </div>
    </div>
  );
}

export default Product