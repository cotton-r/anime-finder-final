import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { animeApi } from "../services/animeApi";

import animeBannerReducer from '../components/AnimeBanner/AnimeBannerSlice';

export default configureStore({
    reducer: {
        [animeApi.reducerPath]: animeApi.reducer,
        animeBanner: animeBannerReducer,
    },
});