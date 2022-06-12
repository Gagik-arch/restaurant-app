import {createSlice} from '@reduxjs/toolkit'
import { getRestaurant} from '../asyncThunks'
import {IRestaurant,IRestaurantsInitialState} from "../../interfaces";
import {useNavigate} from "react-router-dom";

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
            state.data = action.payload
            state.isLoading = false
        })
        builder.addCase(getRestaurant.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getRestaurant.rejected, (state, action) => {
            action.payload ? state.error = action?.payload : state.error = action.error
            state.isLoading = false
        })
    },
})

export const restaurantReducer = restaurantSlice.reducer

