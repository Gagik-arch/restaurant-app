import React, { FC, useState } from 'react'
import s from './rating.module.css'
import { Icon } from '../../core'

interface IProps {
  data: number
  onClick?: (number) => void
  disabled?: boolean
  size?: number
}

const Rating: FC<IProps> = ({
  data,
  onClick,
  disabled = false,
  size,
}): JSX.Element => {
  const [over, setOver] = useState<number>(data)
  const [check, setCheck] = useState<boolean>(false)

  const onSend = (rate: number) => {
    if (!disabled) {
      setOver(rate)
      setCheck(true)
      onClick && onClick(rate)
    }
  }

  return (
    <div className={s.container}>
      {Array.from({ length: 5 }, (v, k) => {
        return (
          <span
            className={s['star']}
            onMouseOver={() => !disabled && setOver(k + 1)}
            onMouseOut={() => {
              if (!disabled && !check) {
                setOver(data)
              }
              setCheck(false)
            }}
            onClick={() => onSend(k + 1)}
            key={k}
          >
            <Icon
              fill={k + 1 <= over ? 'orange' : 'white'}
              color={'orange'}
              type={'Star'}
              size={size}
            />
          </span>
        )
      })}
    </div>
  )
}

export default Rating
