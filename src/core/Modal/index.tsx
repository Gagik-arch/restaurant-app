import { FC, useRef, useLayoutEffect } from 'react'
import s from './modal.module.css'
import { sendFeedback } from './../../store/asyncThunks/restaurants'

interface IProps {
  visibility: boolean
  setVisibility: (visibility: boolean) => void
  children: React.ReactNode
}

const root = document.documentElement

window.addEventListener('click', (e) => {
  const target = (e.target as Element).closest('.modal-handler')
  if (target) {
    root.style.setProperty('--mouse-x', e.pageX + 'px')
    root.style.setProperty('--mouse-y', e.pageY + 'px')
  }
})

let timer: NodeJS.Timeout

const Modal: FC<IProps> = ({ visibility, setVisibility, children }) => {
  const modal = useRef<HTMLDivElement>()

  useLayoutEffect(() => {
    clearTimeout(timer)
  }, [])

  const onClose = (e) => {
    if (modal.current) {
      modal.current.classList.remove(s['modal_visible'])
      modal.current.classList.add(s['modal_hidden'])
    }
    timer = setTimeout(() => {
      setVisibility(false)
    }, 400)

    e.stopPropagation()
  }

  return visibility ? (
    <div
      onClick={onClose}
      className={[
        s.container,
        s[visibility ? 'container_visible' : 'container_hidden'],
      ].join(' ')}
    >
      <div
        ref={modal}
        onClick={(e) => {
          e.stopPropagation()
        }}
        className={[
          s.modal,
          s['modal_' + (visibility ? 'visible' : 'hidden')],
        ].join(' ')}
      >
        <div className={s.block}>{children}</div>
      </div>
    </div>
  ) : null
}

export default Modal
