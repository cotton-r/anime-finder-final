import React from 'react';

import AnimeBanner from '../AnimeBanner/AnimeBanner';

import "./Homepage.css";

const Homepage = () => {


  return (
    <div className="homepage">
      <div className='anime-banners-container'>
        <AnimeBanner category="trending" />
        {/* <AnimeBanner />
        <AnimeBanner /> */}
      </div>
      <div className='category-section-container'>
        <p>hello</p>
      </div>
    </div>
  );
};

export default Homepage;