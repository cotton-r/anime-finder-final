import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [],
};

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        addCategoryData: (state, action) => {
            state.categories = action.payload;
        },
    }
});

export const { addCategoryData } = categoriesSlice.actions;

export default categoriesSlice.reducer;