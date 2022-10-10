import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Header from '../components/Header/Header';

const App = () => {

  return (
    <BrowserRouter>
        <div classname="app">
          <Header />
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
          </Routes>
        </div>
    </BrowserRouter>

  );
};

export default App;