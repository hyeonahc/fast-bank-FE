import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { mapObject } from '@/utils/mapObject';
import { Product } from '@/types/product';

export const searchApi = createApi({
  reducerPath: 'searchApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000',
  }),
  endpoints: (builder) => ({
    search: builder.query({
      query: (data: { word: string; keyword?: string; catalog?: string }) => ({
        url: 'search',
        method: 'POST',
        body: mapObject(data, (key, value) =>
          value === '' ? undefined : value,
        ),
      }),
      transformResponse: (response: { products: Product[] }, meta) =>
        response.products,
    }),
  }),
});

export const { useSearchQuery } = searchApi;
