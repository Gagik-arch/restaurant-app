import {FC, useState} from 'react'
import s from './rating.module.css'
import {Icon} from '../../core'

interface IProps {
    data: number,
}

const Rating: FC<IProps> = ({
                                data,
                            }): JSX.Element => {
    const [over, setOver] = useState<number>(data)

    const onClick = (rate: number) => {
        setOver(rate)
    }

    return (
        <div className={s.container}>
            {
                Array.from({length: 5}, (v, k) => {
                    return <span className={[s['star' + (k + 1 <= over ? '_over' : '')]].join(' ')}
                                 onMouseOver={() => setOver(k + 1)}
                                 onMouseOut={() => setOver(over)}
                                 onClick={() => onClick(k + 1)} key={k}
                    >
                        <Icon fill={k + 1 <= over ? 'orange' : 'white'}
                              color={'orange'}
                              type={'Star'}
                        />
                    </span>
                })
            }
        </div>
    )
}

export default Rating
