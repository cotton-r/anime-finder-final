import React from 'react';

const AnimeListItem = ({ anime }) => {


  return (
    <div className='list-anime-item'>
        <div className='list-anime-image'>
            <a className='darken'>
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

                </div>
                <div className='list-anime-ratings'>
                    
                </div>
            </div>
            <div className='list-anime-description'>
                
            </div>
        </div>
    </div>
  );
};

export default AnimeListItem;