import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useGetCategoryOfAnimeQuery } from '../../services/animeApi';
import { addTrendingAnime } from './AnimeBannerSlice';

import './AnimeBanner.css';

const AnimeBanner = ({ category }) => {

    const dispatch = useDispatch();
    const animeData = useSelector((state) => state.animeBanner.trendingAnime);

    const { data: trendingAnime, isFetching } = useGetCategoryOfAnimeQuery(category);

    useEffect(() => {
        dispatch(addTrendingAnime(trendingAnime));
    }, [trendingAnime]);

    console.log(animeData);

  return (
    <div>AnimeBanner</div>
  );
};

export default AnimeBanner;