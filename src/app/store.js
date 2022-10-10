import { combineReducers, configureStore } from "@reduxjs/toolkit";

const reducers = combineReducers({
    // trendingAnime: trendingAnimeReducer,
});

export const store = configureStore({
    reducer: reducers,
});