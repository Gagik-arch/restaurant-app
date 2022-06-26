import React, { FC } from 'react'
import * as Icons from 'react-feather'
import s from './icon.module.css'

interface Props {
  type: string
  fill?: string
  color?: string
  size?: number
}

const Icon: FC<Props> = ({
  type = 'AlertOctagon',
  fill,
  color,
  size = 20,
}): JSX.Element => {
  const Feather = Icons[type]

  if (fill) {
    return <Feather fill={fill} color={color} size={size} />
  }
  return <Feather color={color} size={size} />
}

export default Icon
