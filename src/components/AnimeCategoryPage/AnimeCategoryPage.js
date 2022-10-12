import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useGetCategoryOfAnimeQuery } from '../../services/animeApi';
import { addTrendingCategory } from './AnimeCategoryPageSlice';
import CircularProgress from "@mui/material/CircularProgress";
import './AnimeCategoryPage.css';
import AnimeCard from '../AnimeCard/AnimeCard';

const AnimeCategoryPage = () => {
    
    const { category } = useParams();
    const dispatch = useDispatch();
    const animeData = useSelector((state) => state.animeCategory.trendingAnime);
    const { data: trendingCategory, isFetching } = useGetCategoryOfAnimeQuery(category);

    useEffect(() => {
        dispatch(addTrendingCategory(trendingCategory));
    }, [trendingCategory]);

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
      <div className='category-list-wrapper'>
        {/* the below .slice() is so that only the first (5) titles are displayed */}
        {animeData?.data?.slice(0, (number)).map((anime) => (
          <AnimeCard anime={anime} key={anime.id} />
        ))}
      </div>
    );

  return (
    <div className='category-container'>
      <h3 className='category-title'>{categoryTitle}</h3>
      {!isFetching
        ? <div className="category-wrapper">
            {mapAnime(numberToMap)}
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