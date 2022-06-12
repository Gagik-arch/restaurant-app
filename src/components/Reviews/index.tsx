import {FC} from 'react'
import s from './review.module.css'
import {IReview} from "../../interfaces";
import {Rating} from '../index'

interface IProps {
    data: IReview[],
}

const Reviews: FC<IProps> = ({data}): JSX.Element => {
    return (
        <div className={s.container}>
            <div className={s.reviews}>
                reviews {data.length}
            </div>
            {data.map((review, index) => {
                return (
                    <div key={index} className={s.review}>
                       <div className={s.text}>
                           {review.feedback}
                       </div>
                        <Rating data={review.rating}
                                size={15}
                                disabled />
                    </div>
                )
            })}
        </div>
    )
}

export default Reviews
