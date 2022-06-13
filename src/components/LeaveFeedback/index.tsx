import {FC, useRef, useState} from 'react'
import s from './leaveFeedback.module.css'
import {Rating} from "../index";
import {Input, Button} from "../../core";
import {IRestaurant, IFeedbackBody} from "../../interfaces";
import {useDispatch} from "../../store";
import {sendFeedback} from '../../store/asyncThunks'

interface IProps {
    data: IRestaurant
}

const LeaveFeedback: FC<IProps> = ({data}) => {
    const dispatch = useDispatch()
    const [warning, setWaring] = useState<boolean>(false)
    const body = useRef<IFeedbackBody | {}>({rating: data.rating, id: data._id}).current

    const onFinish = (text, key) => {
        body[key] = text
    }
    const onSend = () => {
        if (body.hasOwnProperty('feedback')) {
            dispatch(sendFeedback(body))
            setWaring(false)
        } else {
            setWaring(true)
        }
    }

    return (
        <div className={s.container}>
            <div className={s.block}>
                <h4>
                    <b>Leave Feedback</b> <Rating data={data.rating}
                                                  onClick={(rating: number) => {
                                                      if ("rating" in body) {
                                                          body.rating = rating
                                                      }
                                                  }}/>
                </h4>
                <Input type={'textarea'}
                       placeholder={'Leave feedback'}
                       name={'feedback'}
                       className={warning ? s.feedback_textarea : ''}
                       onFinish={onFinish}/>
                <Button className={s.send} label={'Send'} onClick={onSend}/>
            </div>
        </div>
    )
}

export default LeaveFeedback
