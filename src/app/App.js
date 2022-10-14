import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import "./App.css"

import Header from '../components/Header/Header';
import Homepage from '../components/Homepage/Homepage';
import AnimeCategoryPage from '../components/AnimeCategoryPage/AnimeCategoryPage';
import GenrePage from '../components/GenrePage/GenrePage';

const App = () => {

  return (
    <BrowserRouter>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/anime/:category" element={<AnimeCategoryPage />} />
            <Route path="/explore/:genre" element={<GenrePage />} />
          </Routes>
        </div>
    </BrowserRouter>

  );
};

export default App;