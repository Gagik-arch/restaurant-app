import {FC} from 'react'
import s from './leaveFeedback.module.css'
import {Rating} from "../index";
import {Input, Button} from "../../core";
import {IRestaurant, IRestaurantsInitialState} from "../../interfaces";

interface IProps {
    data: IRestaurant
}

const LeaveFeedback: FC<IProps> = ({data}) => {

    return (
        <div className={s.container}>
            <div className={s.block}>

                <h4>
                    <b>LeaveFeedback</b> <Rating data={data.rating}/>
                </h4>
                <Input type={'textarea'} placeholder={'Leave feedback'}/>
                <Button className={s.send} label={'Send Feedback'}/>
            </div>
        </div>
    )
}

export default LeaveFeedback
