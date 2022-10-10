import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import "./App.css"

import Header from '../components/Header/Header';
import Homepage from '../components/Homepage/Homepage';

const App = () => {

  return (
    <BrowserRouter>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </div>
    </BrowserRouter>

  );
};

export default App;