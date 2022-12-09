import React from 'react';
import homevideo from '../components/homevideo.mp4';
import logo from '../components/logo.png';

const Header = () => {
  return (
   <div className='header-wraper'>
        <video src= {homevideo} autoPlay loop muted/>
        <div className='overlay'></div>
        <div className='main-info'>
            <img className='logo' src={logo}/>
            <p>Listen to your favorite songs everywhere you go</p>
            <a href='/' className='btn-ma-offer'> pick my songs</a>
        </div>
   </div>
  )
}

export default Header
