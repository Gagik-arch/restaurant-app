import {createSlice} from '@reduxjs/toolkit'
import {getRestaurants} from '../asyncThunks'
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

            const sorted: IRestaurant[] = action.payload.sort((a: IRestaurant, b: IRestaurant) => b.rating - a.rating)
            state.data = sorted
            state.isLoading = false
        })
        builder.addCase(getRestaurants.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getRestaurants.rejected, (state, action) => {
            state.error = action.payload || action.error
            state.isLoading = false
        })
    },
})

export const restaurantsReducer = restaurantsSlice.reducer

