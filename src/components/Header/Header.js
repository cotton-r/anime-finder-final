import React from 'react';

// import Ant Design component and icons
import { AudioOutlined } from '@ant-design/icons';
import { Input } from 'antd';

import SearchBar from '../SearchBar/SearchBar';

import "./Header.css"

const Header = () => {

    // destructing antd component
    const { Search } = Input;

  return (
    <div className="header">
        <div className='header-title-row'>
            <h1 className='header-title'>Anime Finder</h1>
        </div>
        <div className='header-search-row'>
            <SearchBar />
        </div>
    </div>
  );
};

export default Header;