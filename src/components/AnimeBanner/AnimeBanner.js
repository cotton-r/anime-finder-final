import React, { useEffect } from 'react';
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

  return (
    <div className='container'>
      {!isFetching
        ? <div className="wrapper">
            <div className='anime-list-wrapper'>
              {/* the below .slice() is so that only the first 5 titles are displayed */}
              {animeData?.data?.slice(0, 5).map((anime) => (
                <AnimeCard anime={anime} key={anime.id} />
              ))}
            </div>
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
    </div>
  );
};

export default AnimeBanner;