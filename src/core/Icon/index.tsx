import React, {FC} from "react";
import * as Icons from 'react-feather'
import s from './icon.module.css'

interface Props {
    type: string
    fill?: string
    color?: string
    size?:number
}

const Icon: FC<Props> = ({
                             type,
                             fill,
                             color,
    size=24
                         }): JSX.Element => {
    const Feather = Icons[type || 'AlertOctagon']

    if (fill) {
        return <Feather
            fill={fill || undefined}
            color={color}
            size={size}
        />
    }
    return (
        <Feather
            color={color}
            size={size}
        />
    );
};

export default Icon
