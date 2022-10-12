import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useGetCategoryOfAnimeQuery } from '../../services/animeApi';
import { addTrendingAnime } from './AnimeBannerSlice';

import CircularProgress from "@mui/material/CircularProgress";

import './AnimeBanner.css';

import AnimeCard from '../AnimeCard/AnimeCard';
import { FirstPage } from '@mui/icons-material';

const AnimeBanner = ({ category }) => {

    const dispatch = useDispatch();
    const animeData = useSelector((state) => state.animeBanner.trendingAnime);

    const { data: trendingAnime, isFetching } = useGetCategoryOfAnimeQuery(category);

    useEffect(() => {
        dispatch(addTrendingAnime(trendingAnime));
    }, [trendingAnime]);

    // hard coded array for placeholder loading symbol cards
    const loadingCards = [1, 2, 3, 4, 5];
    let incrementKey = 0;

    // category title capitalise first letter
    const categoryTitle = `${category.charAt(0).toUpperCase() + category.slice(1)} Anime`

    // Section for loading specific number of cards

    // set number of anime to map via state so it can be change in media queries
    const [numberToMap, setNumberToMap] = useState(6);
    
    //dynamically load the anime cards so that they can use the 'number' variable
    const mapAnime = (number) => ( 
      <div className='anime-list-wrapper'>
        {/* the below .slice() is so that only the first (5) titles are displayed */}
        {animeData?.data?.slice(0, (number)).map((anime) => (
          <AnimeCard anime={anime} key={anime.id} />
        ))}
      </div> )

    // window.matchMedia('(min-width: 1194px)').addEventListener('change', () => setNumberToMap(4));
    // window.matchMedia('(max-width: 1195px)').addEventListener('change', () => setNumberToMap(5));   

  return (
    <div className='container'>
      <h3 className='category-title'>{categoryTitle}</h3>
      {!isFetching
        ? <div className="wrapper">
            {mapAnime(numberToMap)}
          </div>
        :
        <div className='wrapper'>
            <div className='anime-list-wrapper'>
                {loadingCards.map(() => (
                    <div className='loading-card' key={incrementKey += 1} >
                        <CircularProgress />
                    </div>
                ))}
            </div>
        </div>
      }
      <p className='view-more'>View more</p>
    </div>
  );
};

export default AnimeBanner;