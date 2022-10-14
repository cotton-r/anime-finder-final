import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const categoryHeaders = {
    "Accept": "application/vnd.api+json",
    "Content-Type": "application/vnd.api+json",
};

const baseUrl = 'https://kitsu.io/api/edge';

const createRequest = (url) => ({ url, headers: categoryHeaders });

export const categoriesApi = createApi({
    reducerPath: 'categoriesApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getAllCategories: builder.query({
            query: () => 
                createRequest(`/categories?page%5Blimit%5D=40`)
        }),
        getThisCategory: builder.query({
            query: (genre) =>
                createRequest(`/anime?filter%5Bcategories%5D=${genre}&page%5Blimit%5D=20&sort=-average_rating`)
        }),
    })
});

export const { useGetAllCategoriesQuery, useGetThisCategoryQuery } = categoriesApi;