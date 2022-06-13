import {createSlice} from '@reduxjs/toolkit'
import {getRestaurant, sendFeedback} from '../asyncThunks'
import {IRestaurant, IRestaurantsInitialState} from "../../interfaces";

const initialState: IRestaurantsInitialState = {
    isLoading: true,
    data: null,
    error: null,
}

const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getRestaurant.fulfilled, (state, action) => {
            state.isLoading = false
            action.payload.hasOwnProperty('message') ?
                state.error = action?.payload :
                state.data = action.payload
        })
        builder.addCase(getRestaurant.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getRestaurant.rejected, (state, action) => {
            action.payload ? state.error = action.payload : state.error = action.error
            state.isLoading = false
        })
        // Feedback
        builder.addCase(sendFeedback.fulfilled, (state, action) => {
            action.payload.hasOwnProperty('message') ?
                state.error = action?.payload :
                // @ts-ignore
                state.data = action.payload
        })
        builder.addCase(sendFeedback.pending, (state) => {
        })
        builder.addCase(sendFeedback.rejected, (state, action) => {

            action.payload ? state.error = action?.payload : state.error = action.error
        })
    },
})

export const restaurantReducer = restaurantSlice.reducer
