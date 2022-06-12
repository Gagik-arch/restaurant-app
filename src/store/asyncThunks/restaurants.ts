import {createAsyncThunk} from '@reduxjs/toolkit'
import restaurantApi from "../../api/restaurants";

export const getRestaurants = createAsyncThunk(
    'restaurants/getAll',
    async () => await restaurantApi.getAll()
)
export const getRestaurant = createAsyncThunk(
    'restaurants/single',
    async (id:string) => await restaurantApi.getRestaurant(id)
)
