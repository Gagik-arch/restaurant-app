import * as Redux from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'
import {restaurantReducer, restaurantsReducer, latlngSliceReducer} from "./reducers";

export const store = configureStore({
    reducer: {
        restaurants: restaurantsReducer,
        restaurant: restaurantReducer,
        latlng: latlngSliceReducer
    }
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useDispatch = () => Redux.useDispatch<AppDispatch>()
export const useSelector: Redux.TypedUseSelectorHook<RootState> = Redux.useSelector
