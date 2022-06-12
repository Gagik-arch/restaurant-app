import React, {FC} from 'react'
import s from './button.module.css'
import {NavLink} from "react-router-dom";

interface Props {
    onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLDivElement>,
    label?: string ,
    className?: string | string[],
    link?: string,
}

const Button: FC<Props> = ({
                               onClick,
                               label = '',
                               className,
                               link,
                           }): JSX.Element => {

    if (link) {
        return <NavLink to={link}
                        className={[s.container, className].join(' ')}
                        onClick={onClick}>
            {label}
        </NavLink>
    }
    return <div className={[s.container, className].join(' ')}
                onClick={onClick}>
        {label}
    </div>
}
export default Button
