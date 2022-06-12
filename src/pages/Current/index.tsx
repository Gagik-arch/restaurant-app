import {FC, useEffect} from 'react'
import s from './current.module.css'
import {useDispatch, useSelector} from "../../store";
import {IRestaurantsInitialState} from "../../interfaces";
import {getRestaurant} from "../../store/asyncThunks";
import {useLocation} from "react-router-dom";

export const Current: FC = () => {
    const dispatch = useDispatch()
    const {search} = useLocation();
    const id = new URLSearchParams(search).get('id');
    const {data, isLoading, error} = useSelector<IRestaurantsInitialState>(state => state.restaurant)

    useEffect(() => {
        const fetch = () => {
            dispatch(getRestaurant(id))
        }
        return fetch()
    }, [])

    if (error) {
        return <div>Error</div>
    }
    return (
        <div className={s.container}>
            <div className={s.block}>
                {!Array.isArray(data) && !isLoading && data?.name}

            </div>
        </div>
    )
}
