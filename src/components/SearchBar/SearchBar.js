import React, { useState } from 'react';

import { SearchOutlined } from '@ant-design/icons';

import "./SearchBar.css";

const SearchBar = () => {

    const [searchInput, setSearchInput] = useState('');

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            // handleSearch();
        };
    };

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

  return (
    <div className='search-bar'>
        <input
            type="text"
            placeholder="Search here"
            onChange={handleChange}
            value={searchInput} 
            onKeyDown={handleKeyPress}
        />
        <SearchOutlined 
            className='search-icon'
            // onClick={handleSearch()}
        />
    </div>
  );
};

export default SearchBar;