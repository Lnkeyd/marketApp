import { configureStore } from "@reduxjs/toolkit";
import { fakestoreApi } from "./api/fakestore.api";
import cartReducer from './slices/cart/cartSlice'
import favouritesReducer from './slices/favourites/favouritesSlice'

export const store = configureStore({
    reducer: {
        [fakestoreApi.reducerPath]: fakestoreApi.reducer,
        cart: cartReducer,
        favourites: favouritesReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(fakestoreApi.middleware)
})
