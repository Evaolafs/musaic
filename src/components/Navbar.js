
import React from 'react';
import navlogo from '../components/navlogo.png';



const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="/"><img className='navlogo'src={navlogo} alt='navlogo'/></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link text-nowrap" href="/">Pick songs </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/">plans</a>
          </li>
          <li className="nav-item">
          <a className="nav-link" href="/">Help</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar

