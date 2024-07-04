import React from 'react'
import './home.css';
import { Link } from 'react-router-dom';

const Home = () => {


  return (
    <>
<div className="homePicture">
<div className="Menu">
  <p>Find the perfect companion for your adventures at <b>Deals & Wheels </b> <br />Let the road be your guide, and the car be your trusted ally <br />Start your next chapter today</p>
<Link to="/login"><button className='btn fill'>Login</button></Link>
<Link to="/shop"><button className='btn fill'>Shop</button></Link>
</div>
</div>
  
    </>
  )
}

export default Home


