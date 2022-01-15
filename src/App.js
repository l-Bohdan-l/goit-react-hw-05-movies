import './App.scss';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';

import { HomePage } from './components/HomePage/HomePage';
import { Header } from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        {/* <HomePage /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
