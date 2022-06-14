import React, {FC, useEffect} from 'react'
import s from './main.module.css'
import { RestaurantList,Map } from 'components'
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
            <div style={{   width: '100%',
                height: '100%'}} id="map">
                <Map/>
            </div>
        </div>
    )
}
