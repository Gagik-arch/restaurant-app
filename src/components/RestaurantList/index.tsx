import {FC, useEffect} from 'react'
import s from './restaurantList.module.css'
import {IRestaurantsInitialState} from "../../interfaces";
import {useDispatch, useSelector} from "../../store";
import {Loader, Button} from "../../core";
import {getLocation} from '../../store/asyncThunks'
import {Rating} from "../index";

const RestaurantList: FC = (): JSX.Element => {
    const dispatch = useDispatch()
    const {data, isLoading, error} = useSelector<IRestaurantsInitialState>(state => state.restaurants)

    const getLocationLatLng = (address: string, id: string) => {
        sessionStorage.setItem('restaurantId', id)
        dispatch(getLocation(address))
    }

    if (error) {
        return <div>Error</div>
    }

    return <div className={s.container}>
        <div className={s.block}>
            {
                isLoading ? <Loader/> :
                    (Array.isArray(data) && data.length) ? data.map((restaurant, index) => (
                            <div className={s.list}
                                 style={{
                                     animationDelay:index * 30 + 'ms'
                                 }}
                                 title={restaurant.name}
                                 key={index}
                                 onClick={() => getLocationLatLng(restaurant.address, restaurant._id)}
                            >
                                <div style={{padding:'10px 10px 8px 10px'}}>
                                    <div className={s.title}>
                                        {restaurant.name}
                                    </div>
                                    <Rating data={restaurant.rating}
                                            size={16}
                                            disabled
                                    />
                                </div>
                                <Button label={'View Restaurant'}
                                        link={'/current?id=' + restaurant._id}
                                />
                            </div>
                        )) :
                        <div>There are not restaurants.</div>
            }
        </div>
    </div>
}

export default RestaurantList
