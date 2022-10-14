import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    thisCategory: [],
};

export const genrePageSlice = createSlice({
    name: 'genrePage',
    initialState,
    reducers: {
        addThisCategory: (state, action) => {
            state.thisCategory = action.payload;
        },
    }
});

export const { addThisCategory } = genrePageSlice.actions;

export default genrePageSlice.reducer;