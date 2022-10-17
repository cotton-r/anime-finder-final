import React from 'react';

import AnimeBanner from '../AnimeBanner/AnimeBanner';
import Categories from '../Categories/Categories';

import "./Homepage.css";

const Homepage = () => {


  return (
    <div className="homepage">
      <div className='anime-banners-container'>
        <AnimeBanner category="trending" />
        <AnimeBanner category="Most Popular" />
        {/* <AnimeBanner /> */}
      </div>
      <div className='category-section-container'>
        <Categories />
      </div>
    </div>
  );
};

export default Homepage;