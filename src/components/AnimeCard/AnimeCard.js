import React, { useState, useEffect } from 'react';

import './AnimeCard.css';

import { HeartOutlined } from '@ant-design/icons';

import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
  } from '@chakra-ui/react'

const AnimeCard = ({ anime }) => {

    const initialFocusRef = React.useRef()

    const useMedia = (query) => {
        const [matches, setMatches] = useState(window.matchMedia(query).matches);

        useEffect(() => {
            let media = window.matchMedia(query);
            if (media.matches !== matches) {
                setMatches(media.matches);
            }
            let listener = () => setMatches(media.matches);
            media.addEventListener(null, listener);
            return () => media.removeEventListener(null, listener);
        }, [query]);  

        return matches;
    };

    const small = useMedia("(min-width: 525px)");

    return (

    <div>
        {small
        ?
            <Popover
                initialFocusRef={initialFocusRef}
                placement='bottom'
                closeOnBlur={true}
                trigger="hover"
                className='popover-box'
            >
                <PopoverTrigger>
                <div className='anime-card'>
                <a 
                    className='darken'
                >
                    <img src={anime.attributes.posterImage.small} alt={anime.attributes.canonicalTitle} />
                </a>
                </div>
                </PopoverTrigger>
                <PopoverContent 
                    color='white' 
                    bg='#2f385f' 
                    borderColor='blue.800' 
                    width="400px" 
                    padding="10px 20px"

                >
                <PopoverHeader>
                    <div className='popover-header'>
                        <h3>{anime.attributes.canonicalTitle} <span className="year-released">{anime.attributes.startDate.substring(0,4)}</span></h3>
                    </div>
                    <div className='popover-ratings'>
                        <p className='popover-rating'>{anime.attributes.averageRating}%</p>
                        <p className='popover-popular'><HeartOutlined style={{color: "#c92e2e"}} /> #{anime.attributes.popularityRank} Most Popular</p>
                    </div>
                </PopoverHeader>
                <PopoverArrow />
                <PopoverBody>
                    <div className='popover-desc'>
                        <p>{anime.attributes.synopsis.substring(0, 250)}...</p>
                    </div>
                </PopoverBody>
                <PopoverFooter
                    border='0'
                    display='flex'
                    alignItems='center'
                    justifyContent='space-between'
                    pb={4}
                >
                </PopoverFooter>
                </PopoverContent>
            </Popover>
        :
        <div className='anime-card'>
            <a 
                className='darken'
            >
                <img src={anime.attributes.posterImage.small} alt={anime.attributes.canonicalTitle} />
            </a>
        </div>
        }
    </div>
  )
}

export default AnimeCard;