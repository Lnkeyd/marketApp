import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ICartItem, ICartState } from "../cart/cartSlice";

interface IFavouriteState {
    favouritesItems: ICartItem[]
}

const initialState: IFavouriteState = {
    favouritesItems: [],
}

const favouritesSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        addToFavourites: (state, action: PayloadAction<ICartItem>) => {
            state.favouritesItems.push(action.payload)
        },
        removeFromFavourites: (state, action: PayloadAction<number>) => {
            const itemId = action.payload
            state.favouritesItems = state.favouritesItems.filter((item) => item.id !== itemId)
        }
    }
})

export const { addToFavourites, removeFromFavourites } = favouritesSlice.actions

export default favouritesSlice.reducer