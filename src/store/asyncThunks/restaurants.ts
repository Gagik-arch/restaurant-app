import {createAsyncThunk} from '@reduxjs/toolkit'
import restaurantApi from "../../api/restaurants";
import {IFeedbackBody} from '../../interfaces'

export const getRestaurants = createAsyncThunk(
    'restaurants/getAll',
    async () => await restaurantApi.getAll()
)
export const getRestaurant = createAsyncThunk(
    'restaurants/single',
    async (id: string) => await restaurantApi.getRestaurant(id)
)

export const sendFeedback = createAsyncThunk(
    'restaurants/feedback',
    async (body: IFeedbackBody) => await restaurantApi.sendFeedback(body)
)
