import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TagDescription } from '@reduxjs/toolkit/src/query/endpointDefinitions';
import axios from 'axios';

import { Product } from '@/types/product';

const tagTypes = ['Cart'] as const;

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:8000',
  prepareHeaders: async (headers, { getState, extra }) => {
    // FIXME 임시!!!!!!!!!!!
    let token = null; // sessionStorage.getItem('TEMP_TOKEN');
    if (!token) {
      try {
        const res = await axios.post('http://localhost:8000/login', {
          email: 'test@test.com',
          password: 'test@test.com',
        });
        token = res.data.accessToken;
        sessionStorage.setItem('TEMP_TOKEN', token ?? '');
      } catch (e) {}
    }

    headers.set('authorization', `Bearer ${token}`);

    return headers;
  },
});

const transformResponse = (response: { products: Product[] }) =>
  response.products;

// 지금 상태에서는 더 최적화가 애매해보임
const providesTags = (
  result: Product[] | undefined,
): ReadonlyArray<TagDescription<typeof tagTypes[number]>> =>
  result ? [{ type: 'Cart', id: 'LIST' }] : [];

export const cartApi = createApi({
  reducerPath: 'cart',
  baseQuery: baseQuery,
  tagTypes,
  endpoints: (builder) => ({
    getCartProducts: builder.query({
      query: () => 'cart',
      transformResponse,
      providesTags,
    }),
    addCart: builder.mutation({
      query: ({ ids }: { ids: string[] }) => ({
        url: 'cart',
        method: 'POST',
        body: { cart: ids },
      }),
      transformResponse,
      invalidatesTags: providesTags,
    }),
    removeCart: builder.mutation({
      query: ({ ids }: { ids: string[] }) => ({
        url: 'cart',
        method: 'DELETE',
        body: { cart: ids },
      }),
      transformResponse,
      invalidatesTags: providesTags,
    }),
  }),
});

export const {
  useGetCartProductsQuery,
  useAddCartMutation,
  useRemoveCartMutation,
} = cartApi;
