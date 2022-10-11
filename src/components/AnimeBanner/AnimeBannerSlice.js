import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    trendingAnime: [],
};

export const animeBannerSlice = createSlice({
    name: 'animeBanner',
    initialState,
    reducers: {
        addTrendingAnime: (state, action) => {
            state.trendingAnime = action.payload;
        },
    }
});

export const { addTrendingAnime } = animeBannerSlice.actions;

export default animeBannerSlice.reducer;