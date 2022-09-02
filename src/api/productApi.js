import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import axios from 'axios'

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:8000',
  prepareHeaders: async (headers) => {
    let token = null
    if (!token) {
      try {
        const res = await axios.post('http://localhost:8000/login', {
          email: 'test@test.com',
          password: 'test@test.com',
        })
        token = res.data.accessToken
        sessionStorage.setItem('TEMP_TOKEN', token ?? '')
      } catch (e) {}
    }
    headers.set('authorization', `Bearer ${token}`)
    return headers
  },
})

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
