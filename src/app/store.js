import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { animeApi } from "../services/animeApi";
import { categoriesApi } from "../services/categoriesApi";

import animeBannerReducer from '../components/AnimeBanner/AnimeBannerSlice';
import animeCategoryReducer from "../components/AnimeCategoryPage/AnimeCategoryPageSlice";
import categoriesReducer from '../components/Categories/CategoriesSlice';

export default configureStore({
    reducer: {
        [animeApi.reducerPath]: animeApi.reducer,
        [categoriesApi.reducerPath]: categoriesApi.reducer,
        animeBanner: animeBannerReducer,
        animeCategory: animeCategoryReducer,
        categories: categoriesReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(animeApi.middleware, categoriesApi.middleware),
});