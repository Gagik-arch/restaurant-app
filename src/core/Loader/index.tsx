import React, {FC} from 'react'
import s from './index.module.css'

const Loader: FC = (): JSX.Element => {

    return (
        <div className={s.container}>
                <div className={s['lds-spinner']}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
        </div>
    )
}
export default Loader
