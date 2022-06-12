import {FC, useEffect} from 'react'
import s from './current.module.css'
import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "../../store";
import {IRestaurantsInitialState} from "../../interfaces";
import {getRestaurant} from "../../store/asyncThunks";
import {Rating, LeaveFeedback} from '../../components'
import {Loader, Icon} from "../../core";

export const Current: FC = () => {
    const dispatch = useDispatch()
    const {search} = useLocation();
    const id = new URLSearchParams(search).get('id');
    const {data, isLoading, error} = useSelector<IRestaurantsInitialState>(state => state.restaurant)

    useEffect(() => {
        return (() => {
            dispatch(getRestaurant(id))
        })()
    }, [])

    if (error) {
        return <div>Error</div>
    }
    return (
        <div style={{height: ' 100vh'}}>
            <div className={s.container}>
                {isLoading && <Loader/>}
                {
                    !Array.isArray(data) && !isLoading && (
                        <div className={s.block}>
                            <div style={{flex: 1}}>
                                <div className={s.top}>
                                    <div className={s.title}>
                                        {data.name}
                                        <div className={s.address} title={data.address}>
                                            {data.address}
                                        </div>
                                    </div>

                                    <div className={s.reviews}>
                                        reviews {data.reviews.length}
                                    </div>
                                </div>
                                <h5>About us </h5>
                                {data.about}
                                <h5>Description</h5>
                                {data.description}
                            </div>
                            <LeaveFeedback data={data}/>
                        </div>
                    )
                }
            </div>
        </div>

    )
}
