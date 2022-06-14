import {createAsyncThunk} from '@reduxjs/toolkit'
import restaurantApi from "../../api/restaurants";
import {IFeedbackBody} from '../../interfaces'

export const getRestaurants = createAsyncThunk(
    'restaurants/getAll',
    async () => await restaurantApi.getAll()
)
export const getRestaurant = createAsyncThunk(
    'restaurant/single',
    async (id: string) => await restaurantApi.getRestaurant(id)
)

export const sendFeedback = createAsyncThunk(
    'restaurant/feedback',
    async (body: IFeedbackBody) => await restaurantApi.sendFeedback(body)
)
