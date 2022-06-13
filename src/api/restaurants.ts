import Api from './index.'
import {IRestaurant} from '../interfaces'


class RestaurantApi extends Api {
    constructor() {
        super('/restaurants')
    }

    public getAll() {
        return this.get<IRestaurant[]>('/getAll').then(res => res)
    }

    public getRestaurant(id) {
        return this.post<IRestaurant>('/getOne', {id}).then(res => res)
    }

    public sendFeedback(body) {
        body.userId = sessionStorage.getItem('userId')
        return this.post('/feedback', body).then(res => res)
    }
}

const restaurantApi = new RestaurantApi()

export default restaurantApi