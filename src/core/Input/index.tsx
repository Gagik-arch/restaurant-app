import {FC} from 'react'
import s from './input.module.css'

interface IProps {
    type?: string
    name?: string
    placeholder?: string
    onFinish?: (text,name) => void
    className?: string
}

let typingTimer;                //timer identifier
let doneTypingInterval: number = 200;

const Input: FC<IProps> = ({
                               type = 'text',
                               name,
                               placeholder,
                               onFinish,
                               className= ''
                           }) => {

    const onTextChange = (text) => {
        if (onFinish) {
            clearTimeout(typingTimer);
            if (text) {
                typingTimer = setTimeout(() => onFinish(text, name), doneTypingInterval);
            }
        }
    }

    if (type === 'textarea') {
        return <textarea
            className={[s.container, s.textarea, className].join(' ')}
            name={name}
            placeholder={placeholder}
            rows={8}
            onChange={(e) => onTextChange(e.currentTarget.value)}
        />
    }
    return (
        <input type={type}
               className={[s.container,className].join(' ')}
               name={name}
               placeholder={placeholder}
               onChange={(e) => onTextChange(e.currentTarget.value)}
        />
    )
}

export default Input
