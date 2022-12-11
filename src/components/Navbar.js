
import React from 'react';
import { Link } from 'react-router-dom';
import navlogo from '../components/navlogo.png';



const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <span className="navbar-brand"> <Link to='/'><img className='navlogo .embed-responsive-item'src={navlogo} alt='navlogo'/></Link></span>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
        <li className="nav-item">
         <span className="nav-link text-nowrap"> <Link to='plan' style={{ textDecoration: 'none', color: 'white' }}>Pick songsg </Link></span>
          </li>
          <li className="nav-item active">
            <span className="nav-link"> <Link to='plan' style={{ textDecoration: 'none', color: 'white' }}>plans </Link></span>
          </li>
          <li className="nav-item">
          <span className="nav-link"> <Link to='help' style={{ textDecoration: 'none', color: 'white' }}>Help</Link></span>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar

