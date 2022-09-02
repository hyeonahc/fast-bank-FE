import { createApi } from '@reduxjs/toolkit/query/react'
import baseQuery from '@/api/baseQuery'

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => 'product',
    }),
  }),
})

export const { useGetProductsQuery } = productApi
