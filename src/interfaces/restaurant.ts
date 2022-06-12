export interface IRestaurant{
    _id: string
    name: string
    address: string
   rating: number
    reviews: IReview[]
    telephone: string
    description?:string
    about?:string
    image:string
}
export interface IReview{
    feedback: string
    rating: number
    userId: string
}
export interface IRestaurantsInitialState {
    isLoading: boolean
    data: null | IRestaurant | IRestaurant[] |   []
    error: any
}

export interface IFeedbackBody{
    feedback?:string,
    rating?:number,
    id?:string
}
