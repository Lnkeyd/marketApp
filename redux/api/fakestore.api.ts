import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import { IProduct, ServerResponse } from '../../models/models'

export const fakestoreApi = createApi({
    reducerPath: 'fakestore/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fakestoreapi.com/'
    }),
    endpoints: build => ({
        getProducts: build.query({
            query: () => ({
                url: 'products',
                params: {
                    limit: 7
                }
            }),
            // transformResponse: (response: any) => response.items
        })
    })
})

export const { useGetProductsQuery } = fakestoreApi