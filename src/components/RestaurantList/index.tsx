import {FC, useEffect} from 'react'
import s from './restaurantList.module.css'
import {IRestaurantsInitialState} from "../../interfaces";
import {useDispatch, useSelector} from "../../store";
import {Loader, Button} from "../../core";
import {getLocation} from '../../store/asyncThunks'

const RestaurantList: FC = (): JSX.Element => {
    const dispatch = useDispatch()
    const {data, isLoading, error} = useSelector<IRestaurantsInitialState>(state => state.restaurants)

    const getLocationLatLng = (address:string,id:string) => {
        sessionStorage.setItem('restaurantId',id)
        dispatch(getLocation(address))
    }

    if (error) {
        return <div>Error</div>
    }

    return <div className={s.container}>
        {
            isLoading ? <Loader/> :
                (Array.isArray(data) && data.length) ?  data.map((restaurant, index) => (
                    <div className={s.list}
                         title={restaurant.name}
                         key={index}
                    >
                        <div className={s.title}
                             onClick={()=>getLocationLatLng(restaurant.address,restaurant._id)}>
                            {restaurant.name}
                        </div>
                        <Button label={'View Restaurant'}
                                link={'/current?id=' + restaurant._id}
                        />
                    </div>
                )) :
            <div>There are not restaurants.</div>
        }
    </div>
}

export default RestaurantList
