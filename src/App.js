import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap'
import { HashRouter as Router, Routes, Route}
    from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import Header from './components/Header';
import Plan from './Plan';
import Help from './Help';
import Home from './Home';

function App() {
  return (

   <Router>
    <Navbar />
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/plan' element={<Plan/>} />
        <Route path='/help' element={<Help/>} />
    </Routes>
    <Footer/>
  </Router>
  );
}

export default App;
