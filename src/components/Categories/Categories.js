import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { useGetAllCategoriesQuery } from '../../services/categoriesApi';
import { addCategoryData } from './CategoriesSlice';

import './Categories.css'
import { useGetCategoryOfAnimeQuery } from '../../services/animeApi';

const Categories = () => {

    const dispatch = useDispatch();
    const categoriesData = useSelector((state) => state.categories.categories);
    const { data: categories, isFetching } = useGetAllCategoriesQuery();

    useEffect(() => {
        dispatch(addCategoryData(categories));
    }, [categories]);

    console.log(categoriesData);


  return (
    <div className='categories-container'>
        <div className='categories-container-title'>
            <h3>CATEGORIES</h3>
        </div>
        <div className='categories-container-break'>

        </div>
        <div className='categories-container-categories'>
            {!isFetching
                ?   <div className='categories-wrapper'>
                        {categoriesData?.data?.map((category) => (
                            <div className='individual-category' key={category.id}>
                                <p>{category.attributes.title}</p>
                            </div>
                        ))}
                    </div>
                :
                <div className='categories-wrapper'>
                    <p>hello</p>
                </div>
            }
        </div>
    </div>
  );
};

export default Categories;