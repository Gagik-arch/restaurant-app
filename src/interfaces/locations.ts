export interface ILatLng{
    lat:number,
    lng:number
}
export interface ILocations{
    location : ILatLng,
    address : string
}

export interface ILocationInitialState {
    isLoading: boolean
    data: null | ILocations
    error: any
}
