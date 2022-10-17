import React from 'react';
import './AnimeListItem.css';

import { HeartOutlined } from '@ant-design/icons';

const AnimeListItem = ({ anime }) => {

  return (
    <div className='list-anime-item'>
        <div className='list-anime-image'>
            <a>
                <img 
                    src={anime.attributes.posterImage.small} 
                    alt={anime.attributes.canonicalTitle}
                    className='list-anime-image-actual'
                />
            </a>
        </div>
        <div className='list-anime-text'>
            <div className='list-anime-title-ratings'>
                <div className='list-anime-title'>
                    {anime.attributes.canonicalTitle}
                </div>
                <div className='list-anime-ratings'>
                    <span className='list-anime-ratings-percent'>{anime.attributes.averageRating}%</span> / <HeartOutlined style={{color: "#c92e2e"}} /> #{anime.attributes.popularityRank}
                </div>
            </div>
            <div className='list-anime-description'>
                {anime.attributes.description}
            </div>
        </div>
    </div>
  );
};

export default AnimeListItem;