import React, {FC} from "react";
import * as Icons from 'react-feather'
import s from './icon.module.css'

interface Props {
    type: string,
    fill?: string,
    color?: string,
}

const Icon: FC<Props> = ({
                             type,
                             fill,
                             color,
                         }): JSX.Element => {
    const Feather = Icons[type || 'AlertOctagon']

    if (fill) {
        return <Feather
            fill={fill || undefined}
            color={color}
        />
    }
    return (
        <Feather
            color={color}
        />
    );
};

export default Icon
