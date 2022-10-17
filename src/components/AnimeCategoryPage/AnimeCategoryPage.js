import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useGetCategoryOfAnimeQuery, useGetPopularAnimeQuery } from '../../services/animeApi';
import { addTrendingCategory } from './AnimeCategoryPageSlice';
import { addPopularAnime } from '../AnimeBanner/AnimeBannerSlice';
import CircularProgress from "@mui/material/CircularProgress";
import './AnimeCategoryPage.css';
import AnimeListItem from '../AnimeListItem/AnimeListItem';

import { v4 as uuidv4 } from "uuid";

const AnimeCategoryPage = () => {
    
    const { category } = useParams();
    const dispatch = useDispatch();

    const animeData = useSelector((state) => state.animeCategory.trendingAnime);
    const { data: trendingCategory, isFetching } = useGetCategoryOfAnimeQuery(category);

    const popularAnimeData = useSelector((state) => state.animeBanner.popularAnime)
    const { data: popularAnime, popularIsFetching } = useGetPopularAnimeQuery();

    useEffect(() => {
        dispatch(category === 'trending' ? addTrendingCategory(trendingCategory) : addPopularAnime(popularAnime));
    }, [trendingCategory, popularAnime]);

    // hard coded array for placeholder loading symbol cards
    const loadingCards = [1, 2, 3, 4, 5];
    let incrementKey = 0;

    // category title capitalise first letter
    const categoryTitle = `${category.charAt(0).toUpperCase() + category.slice(1)} Anime`

    // Section for loading specific number of cards

    // set number of anime to map via state so it can be changed in media queries
    const [numberToMap, setNumberToMap] = useState(20);
    
    //dynamically load the anime cards so that they can use the 'number' variable
    const mapAnime = (number) => ( 
      <div className=' genre-list-wrapper'>
        {/* the below .slice() is so that only the first (5) titles are displayed */}
        {category === 'trending' ?
          animeData?.data?.slice(0, (number)).map((anime) => (
            <div className='anime-list-item' key={uuidv4()}>
              <AnimeListItem anime={anime} />
            </div>
          ))
        :
          popularAnime?.data?.slice(0, (number)).map((anime) => (
            <div className='anime-list-item' key={uuidv4()}>
              <AnimeListItem anime={anime} />
            </div>
          ))}
      </div>
    );

  return (
    <div className='category-container'>
      <h3 className='category-title'>{categoryTitle}</h3>
      {!isFetching
        ? <div className="category-wrapper">
            <div className='anime-list'>
              {mapAnime(numberToMap)}
            </div>
          </div>
        :
        <div className='category-wrapper'>
            <div className='category-list-wrapper'>
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

export default AnimeCategoryPage;