import {createSlice} from '@reduxjs/toolkit'
import {getLocation} from '../asyncThunks'
import {ILocationInitialState} from "../../interfaces";

const initialState: ILocationInitialState = {
    isLoading: true,
    data: null,
    error: null,
}

const latlngSlice = createSlice({
    name: 'latlng',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getLocation.fulfilled, (state, action) => {
            if (action.payload.results.length && action.payload.results[0].locations.length) {
                state.data = {
                    location: action.payload.results[0].locations[0].latLng,
                    address: action.payload.results[0].locations[0].street + '|' +
                        action.payload.results[0].providedLocation.location.replace('Armenia ', '')
                }
            }
        })
        builder.addCase(getLocation.pending, (state) => {
            // state.isLoading = true
        })
        builder.addCase(getLocation.rejected, (state, action) => {
            state.error = action.error.message || action.error || 'Error'
            // state.isLoading = false
        })
    },
})

export const latlngSliceReducer = latlngSlice.reducer

