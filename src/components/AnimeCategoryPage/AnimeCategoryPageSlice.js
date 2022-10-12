import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    trendingAnime: [],
};

export const animeCategoryPageSlice = createSlice({
    name: 'animeCategory',
    initialState,
    reducers: {
        addTrendingCategory: (state, action) => {
            state.trendingAnime = action.payload;
        },
    }
});

export const { addTrendingCategory } = animeCategoryPageSlice.actions;

export default animeCategoryPageSlice.reducer;