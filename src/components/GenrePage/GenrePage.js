import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useGetThisCategoryQuery } from '../../services/categoriesApi';
import { addThisCategory } from './GenrePageSlice';
import CircularProgress from "@mui/material/CircularProgress";
import './GenrePage.css';
import AnimeListItem from '../AnimeListItem/AnimeListItem';

const GenrePage = () => {
    
    const { genre } = useParams();
    const dispatch = useDispatch();
    const genreData = useSelector((state) => state.genrePage.thisCategory);
    const { data: thisCategory, isFetching } = useGetThisCategoryQuery(genre);

    useEffect(() => {
        dispatch(addThisCategory(thisCategory));
    }, [thisCategory]);

    console.log(genreData?.data?.attributes)

    // hard coded array for placeholder loading symbol cards
    const loadingCards = [1, 2, 3, 4, 5];
    let incrementKey = 0;

    // genre title capitalise first letter
    const genreTitle = `${genre.charAt(0).toUpperCase() + genre.slice(1)} Anime`

    // Section for loading specific number of cards

    // set number of anime to map via state so it can be changed in media queries
    const [numberToMap, setNumberToMap] = useState(20);
    
    //dynamically load the anime cards so that they can use the 'number' variable
    const mapAnime = (number) => ( 
      <div className='genre-list-wrapper'>
        {/* the below .slice() is so that only the first (5) titles are displayed */}
        {genreData?.data?.slice(0, (number)).map((anime) => (
            <div className='anime-list-item'>
                <AnimeListItem anime={anime} key={anime.id} />
            </div>
        ))}
      </div>
    );

  return (
    <div className='category-container'>
      <h3 className='category-title'>{genreTitle}</h3>
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

export default GenrePage;