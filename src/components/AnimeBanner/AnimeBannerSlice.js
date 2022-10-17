import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    trendingAnime: [],
    popularAnime: [],
};

export const animeBannerSlice = createSlice({
    name: 'animeBanner',
    initialState,
    reducers: {
        addTrendingAnime: (state, action) => {
            state.trendingAnime = action.payload;
        },
        addPopularAnime: (state, action) => {
            state.popularAnime = action.payload;
        },
    }
});

export const { addTrendingAnime, addPopularAnime } = animeBannerSlice.actions;

export default animeBannerSlice.reducer;