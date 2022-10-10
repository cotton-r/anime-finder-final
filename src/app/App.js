import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import "./App.css"

import Header from '../components/Header/Header';

const App = () => {

  return (
    <BrowserRouter>
        <div className="app">
          <Header />
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
          </Routes>
        </div>
    </BrowserRouter>

  );
};

export default App;