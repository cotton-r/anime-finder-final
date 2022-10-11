import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useGetCategoryOfAnimeQuery } from '../../services/animeApi';
import { addTrendingAnime } from './AnimeBannerSlice';

import CircularProgress from "@mui/material/CircularProgress";

import './AnimeBanner.css';

import AnimeCard from '../AnimeCard/AnimeCard';

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
              {animeData?.data?.map((anime) => (
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