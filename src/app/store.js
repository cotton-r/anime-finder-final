import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { animeApi } from "../services/animeApi";

import animeBannerReducer from '../components/AnimeBanner/AnimeBannerSlice';
import animeCategoryReducer from "../components/AnimeCategoryPage/AnimeCategoryPageSlice";

export default configureStore({
    reducer: {
        [animeApi.reducerPath]: animeApi.reducer,
        animeBanner: animeBannerReducer,
        animeCategory: animeCategoryReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(animeApi.middleware),
});