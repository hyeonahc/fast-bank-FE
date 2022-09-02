import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from '@/api/baseQuery';
import { mapObject } from '@/utils/mapObject';
import { Product } from '@/types/product';

export const searchApi = createApi({
  reducerPath: 'searchApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    search: builder.query({
      query: (data: { word: string; keyword?: string; catalog?: string }) => ({
        url: 'product-search',
        method: 'GET',
        params: mapObject(data, (key, value) =>
          value === '' ? undefined : value,
        ),
      }),
      transformResponse: (response: { products: Product[] }, meta) =>
        response.products,
    }),
  }),
});

export const { useSearchQuery } = searchApi;
