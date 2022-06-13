import React, {FC} from 'react'
import s from './alert.module.css'
import {NavLink} from "react-router-dom";

// interface Props {
//     onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLDivElement>,
//     label?: string ,
//     className?: string | string[],
//     link?: string,
// }

const Alert: FC = ({

                           }): JSX.Element => {


    return <div className={[s.container].join(' ')}>
        Alert
    </div>
}
export default Alert
