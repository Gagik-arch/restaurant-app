import {FC, useEffect} from 'react'
import s from './restaurantList.module.css'
import {IRestaurantsInitialState} from "../../interfaces";
import {useDispatch, useSelector} from "../../store";
import {Loader, Button} from "../../core";

import {getRestaurant} from "../../store/asyncThunks";

const RestaurantList: FC = (): JSX.Element => {
    const {data, isLoading, error} = useSelector<IRestaurantsInitialState>(state => state.restaurants)
    const dispatch = useDispatch()

    if (error) {
        return <div>Error</div>
    }
    return <div className={s.container}>

        {isLoading && <Loader/>}

        {Array.isArray(data) && data.map((restaurant, index) => (
            <div className={s.list} title={restaurant.name.toString()} key={index}>
                <div className={s.title}> {restaurant.name}</div>
                <Button label={'View Restaurant'}
                        link={'/current?id=' + restaurant._id}
                />
            </div>
        ))}

    </div>
}

export default RestaurantList
