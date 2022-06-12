import {createSlice} from '@reduxjs/toolkit'
import { getRestaurants} from '../asyncThunks'
import {IRestaurant, IRestaurantsInitialState} from "../../interfaces";

const initialState: IRestaurantsInitialState = {
    isLoading: true,
    data: [],
    error: null,
}

const restaurantsSlice = createSlice({
    name: 'restaurants',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getRestaurants.fulfilled, (state, action) => {
            const sorted: IRestaurant[] = action.payload.sort((a: IRestaurant, b: IRestaurant) => Number(b.rating) - Number(a.rating))
            state.data = sorted
            state.isLoading = false
        })
        builder.addCase(getRestaurants.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getRestaurants.rejected, (state, action) => {
            action.payload ? state.error = action?.payload : state.error = action.error
            state.isLoading = false
        })
    },
})

export const restaurantsReducer = restaurantsSlice.reducer

