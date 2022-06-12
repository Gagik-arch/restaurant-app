export interface IRestaurant{
    "_id": String,
    "name": String,
    "address": String,
    "rating": Number,
    "reviews": Number,
    "telephone": String
}

export interface IRestaurantsInitialState {
    isLoading: boolean,
    data: IRestaurant | IRestaurant[] | null ,
    error: any,
}
