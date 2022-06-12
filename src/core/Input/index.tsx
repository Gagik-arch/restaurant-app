import {FC} from 'react'
import s from './input.module.css'

interface IProps {
    type?: string
    name?: string
    placeholder?: string
}

const Input: FC<IProps> = ({
                               type = 'text',
                               name,
                               placeholder
                           }) => {
    if (type === 'textarea') {
        return <textarea
            className={[s.container, s.textarea].join(' ')}
            name={name}
            placeholder={placeholder}
            rows={8}
        />
    }
    return (
        <input type={type}
               className={s.container}
               name={name}
               placeholder={placeholder}/>
    )
}

export default Input
