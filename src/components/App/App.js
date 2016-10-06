import React, { Component } from 'react';
import './App.css';

import Homeroute from '../../Routes/Homeroute'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const App = () => {
    return (
      <div id="root">
        <header className="header">
          <Header project_name="dpk home"/>
        </header>
        <div className="container">
          <Homeroute />
        </div>
        <footer className="footer">
          <Footer/>
        </footer>
      </div>
      
    );
}

export default App;
