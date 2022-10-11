import React, { useState } from 'react';

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

    const initialFocusRef = React.useRef()

  return (
    // <Popover
    //     overlayStyle={{maxWidth: '300px'}}
    //     color="#2f385f"
    //     content={popoverContent} 
    //     Title={anime.attributes.canonicalTitle} 
    //     placement="right"
    //     mouseEnterDelay="0.3"
    //     trigger="hover"
    //     open={show}
    //     onMouseLeave={() => setShow(false)}
    // >
        // <div className='anime-card'>
        //     <a 
        //         className='darken'
        //         onMouseLeave={() => setShow(false)}
        //         onMouseEnter={() => setShow(true)}
        //     >
        //         <img src={anime.attributes.posterImage.small} alt={anime.attributes.canonicalTitle} />
        //     </a>
        // </div>
    // </Popover>

    <div>
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
                onMouseLeave={() => setShow(false)}
                onMouseEnter={() => setShow(true)}
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
    </div>
  )
}

export default AnimeCard;