import {FC, useEffect} from 'react'
import s from './current.module.css'
import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "../../store";
import {IRestaurantsInitialState} from "../../interfaces";
import {getRestaurant} from "../../store/asyncThunks";
import {LeaveFeedback, Reviews} from '../../components'
import {Loader} from "../../core";

export const Current: FC = () => {
    const dispatch = useDispatch()
    const {search} = useLocation();
    let id = new URLSearchParams(search).get('id');
    const {data, isLoading, error} = useSelector<IRestaurantsInitialState>(state => state.restaurant)

    useEffect(() => {
        if(id){
            id = id.split('/').shift()
            dispatch(getRestaurant(id))
        }
    }, [])

    if (error) {
        return <div>Not Found</div>
    }
    return (
        <div style={{height: ' 100vh'}}>
            <div className={s.container}>
                <div className={s.block}>
                    {isLoading && <Loader/>}
                    {
                        !Array.isArray(data) && data && !isLoading && (
                            <>
                                <div className={s.content}>
                                    <div style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                                        <div className={s.top}>
                                            <div className={s.title}>
                                                {data.name}
                                                <div className={s.address} title={data.address}>
                                                    {data.address}
                                                </div>
                                            </div>
                                        </div>
                                        <h5>About us </h5>
                                        {data.about}
                                        <h5>Description</h5>
                                        {data.description}
                                        <div className={s.image}>
                                            <img src={data.image} alt="Image"/>
                                        </div>
                                    </div>
                                    <LeaveFeedback data={data}/>
                                </div>
                                <Reviews data={data.reviews}/>
                            </>
                        )
                    }
                </div>
            </div>
        </div>

    )
}
