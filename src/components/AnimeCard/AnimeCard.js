import React, { useState } from 'react';

import './AnimeCard.css';

import { Popover } from 'antd';

const AnimeCard = ({ anime }) => {

    const [show, setShow] = useState(false);

    const popoverContent = (
        <div className='popover-content'>
            <div className='popover-header'>
                <h3>{anime.attributes.canonicalTitle} <span className="year-released">{anime.attributes.startDate.substring(0,4)}</span></h3>
            </div>
            <div className='popover-ratings'>
                <p>#{anime.attributes.popularityRank} Most Popular</p>
                <p className='popover-rating'>{anime.attributes.averageRating}%</p>
            </div>
            <div className='popover-desc'>
                <p>{anime.attributes.synopsis.substring(0, 250)}...</p>
            </div>
        </div>
    )

  return (
    <Popover
        overlayStyle={{maxWidth: '300px'}}
        color="#2f385f"
        content={popoverContent} 
        Title={anime.attributes.canonicalTitle} 
        placement="right"
        mouseEnterDelay="0.3"
        trigger="hover"
        open={show}
        onMouseLeave={() => setShow(false)}
    >
        <div className='anime-card'>
            <a 
                className='darken'
                onMouseLeave={() => setShow(false)}
                onMouseEnter={() => setShow(true)}
            >
                <img src={anime.attributes.posterImage.small} alt={anime.attributes.canonicalTitle} />
            </a>
        </div>
    </Popover>
  )
}

export default AnimeCard;