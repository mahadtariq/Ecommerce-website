import React from 'react'
import { useState } from 'react'
import Cart from './Cart'; // Import the Cart component

import './shop.css'; 
      
  const Shop = ({ setCartData }) => {
    const [product, setProduct]=useState(
    [
        {
          id: 1,
          name: 'BMW',
          price: 5000,
          model: 2016,
          desc: "This is a car",
          img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8fDB8fHww",
        },
        {
          id: 2,
          name: 'Ferrari',
          price: 15000,
          model: 2020,
          desc: "This is a car",
          img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          id: 3,
          name: 'Mclaren',
          price: 13000,
          model: 2019,
          desc: "This is a car",
          img: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhcnN8ZW58MHx8MHx8fDA%3D",
        },
        {
          id: 4,
          name: 'Mustang',
          price: 6000,
          model: 2022,
          desc: "This is a car",
          img: "https://images.unsplash.com/photo-1612544448445-b8232cff3b6c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzdGFuZ3xlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          id: 5,
          name: 'Audi',
          price: 8000,
          model: 2017,
          desc: "This is a car",
          img: "https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXVkaXxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          id: 6,
          name: 'Lamborghini',
          price: 20000,
          model: 2021,
          desc: "This is a car",
          img: "https://images.unsplash.com/photo-1603610882058-6b50795f187a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFtYm9yZ2luaXxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          id: 7,
          name: 'Tesla',
          price: 45000,
          model: 2022,
          desc: "This is a car",
          img: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVzbGF8ZW58MHx8MHx8fDA%3D",
        },
        {
          id: 8,
          name: 'Porsche',
          price: 17000,
          model: 2018,
          desc: "This is a car",
          img: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvcmNoZXxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          id: 9,
          name: 'Chevrolet',
          price: 7000,
          model: 2015,
          desc: "This is a car",
          img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }
      ]);

      const addToCart = (data) => {
        setCartData((prevCartData) => [...prevCartData, data]); // Append the new item to the existing cartData
      };

return (
  <div className='container'>
    <div className='wrapper'>
      {product.map((data) => (
        <div key={data.id} className='banner-image' style={{ backgroundImage: `url(${data.img})` }}>
          <h1><b>{data.name}</b></h1>
          <p><b>Price: {data.price}$</b></p>
          <div className='button-wrapper'>
            <button className='btn fill' onClick={() => addToCart(data)}>Add to cart</button>
            <button className='btn fill'>BUY NOW</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);
};

export default Shop;