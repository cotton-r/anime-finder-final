import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const animeApiHeaders = {
    "Accept": "application/vnd.api+json",
    "Content-Type": "application/vnd.api+json",
};

const baseUrl = 'https://kitsu.io/api/edge';

const createRequest = (url) => ({ url, headers: animeApiHeaders });

export const animeApi = createApi({
    reducerPath: 'animeApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCategoryOfAnime: builder.query({
            query: (category) =>
                createRequest(`/${category}/anime?limit=20`)
        }),
        getPopularAnime: builder.query({
            query: () =>
                createRequest(`/anime?page%5Blimit%5D=20&sort=popularity-rank`)
        }),
    })
});

export const { useGetCategoryOfAnimeQuery, useGetPopularAnimeQuery } = animeApi;
