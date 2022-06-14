import {createAsyncThunk} from '@reduxjs/toolkit'
import locationApi from "../../api/location";

export const getLocation = createAsyncThunk(
    'location/latlng',
    async (id: string) => await locationApi.getLatLng(id)
)

