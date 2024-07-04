import React from 'react';
import './cart.css'
const Cart = ({ cartItems }) => {
  return (
    <div className='Container_Cart'>
      {cartItems.map((item, index) => (
        <div key={index}>
          <p>{item.name} - ${item.price}</p>
          
        </div>
      ))}
    </div>
  );
};

export default Cart;
