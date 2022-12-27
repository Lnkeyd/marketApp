import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../../models/models";

export interface ICartItem extends IProduct {
    amount: number,
}

export interface ICartState {
    cartItems: ICartItem[],
}

const initialState: ICartState = {
    cartItems: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<ICartItem>) => {
            state.cartItems.push(action.payload)
        }
    }
})

export const { addToCart } = cartSlice.actions

export default cartSlice.reducer