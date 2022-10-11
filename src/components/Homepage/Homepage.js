import React from 'react';

import AnimeBanner from '../AnimeBanner/AnimeBanner';

import "./Homepage.css";

const Homepage = () => {


  return (
    <div className="homepage">
        <AnimeBanner />
        <AnimeBanner />
        <AnimeBanner />
    </div>
  );
};

export default Homepage;