import { createApi } from '@reduxjs/toolkit/query/react';
import { TagDescription } from '@reduxjs/toolkit/src/query/endpointDefinitions';

import { Product } from '@/types/product';
import baseQuery from '@/api/baseQuery';

const tagTypes = ['Cart'] as const;

const transformResponse = (
  response: { cartItems: Product[] } & { products: Product[] },
) =>
  (response.cartItems || response.products)?.map((product) => ({
    ...product,
    // 현재 서버 id 가 다 숫자라 json 파싱 중에 숫자로 들어와 string 으로 변환
    id: String(product.id),
  }));

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
        url: 'cart/delete',
        method: 'POST',
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
