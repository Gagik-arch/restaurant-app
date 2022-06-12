import {FC, useEffect} from 'react'
import s from './main.module.css'
import { RestaurantList,GoogleMap } from 'components'
import {useDispatch} from "../../store";
import {getRestaurants} from "../../store/asyncThunks";

export const Main: FC = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getRestaurants())
    }, [])

    return (
        <div className={s.container} >
            <RestaurantList />
            <GoogleMap/>
        </div>
    )
}
