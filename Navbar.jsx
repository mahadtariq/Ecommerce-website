import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Import the CSS file
import racing from './racing.png';
const Navbar = () => {
  return (
    <div className="navbar">
    <div className="left-section">
      <h1 className="name">Deals & </h1>
      <img src={racing}/>
      
    </div>
    <div className="middle-section">
      <Link to="/" className="link">Home</Link>
      <Link to="/shop" className="link">Shop</Link>
      <Link to="/about" className="link">About</Link>
      <Link to="/login" className="link">Login</Link>
      <Link to="/cart" className="link">Cart</Link>

    </div>
    <div className="right-section">
      <input type="text" placeholder="Search..." className="search-bar" />
    </div>
  </div>
  
  );
};

export default Navbar;
