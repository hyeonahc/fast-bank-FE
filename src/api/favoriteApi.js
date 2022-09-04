import { createApi } from '@reduxjs/toolkit/query/react'
import baseQuery from '@/api/baseQuery'

const transformResponse = (response) => response.products

const providesTags = (result) =>
  result ? [{ type: 'WishList', id: 'LIST' }] : []

export const favoriteApi = createApi({
  reducerPath: 'wishList',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getFavProducts: builder.query({
      query: () => 'wishList',
      transformResponse,
      providesTags,
    }),
    addFav: builder.mutation({
      query: ({ id }) => ({
        url: 'wishList',
        method: 'POST',
        body: { wishList: id },
      }),
      transformResponse,
      invalidatesTags: providesTags,
    }),
    removeFav: builder.mutation({
      query: ({ id }) => ({
        url: 'wishList',
        method: 'DELETE',
        body: { wishList: id },
      }),
      transformResponse,
      invalidatesTags: providesTags,
    }),
  }),
})

export const {
  useGetFavProductsQuery,
  useAddFavMutation,
  useRemoveFavMutation,
} = favoriteApi
