import React, { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './componants/Navbar';
import Home from './componants/Home';
import Login from './componants/Login';
import About from './componants/About';
import User from './componants/User';
import Shop from './componants/Shop';
import Cart from './componants/Cart';

function App() {
  const [cartData, setCartData] = useState([]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home /></>
    },
    {
      path: "/shop",
      element: <><Navbar /><Shop setCartData={setCartData} /></>
    },
    {
      path: "/about",
      element: <><Navbar /><About /></>
    },
    {
      path: "/login",
      element: <><Navbar /><Login /></>
    },
    {
      path: "/cart",
      element: <><Navbar /><Cart cartItems={cartData} /></>
    },
    {
      path: "/user/:username",
      element: <><Navbar /><User /></>
    }
  ]);

  return (
    <div >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
