import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Subscription from './components/Subscription';

function App() {
  return (
    <>
   <Navbar />
   <Header />
   <Subscription />
   </>
  );
}

export default App;
