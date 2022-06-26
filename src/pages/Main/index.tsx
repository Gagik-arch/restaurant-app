import { FC, useEffect, useState } from 'react'
import s from './main.module.css'
import { RestaurantList, Map } from 'components'
import { useDispatch } from '../../store'
import { getRestaurants } from '../../store/asyncThunks'
import { Modal } from './../../core'

const Main: FC = (): JSX.Element => {
  const [visibility, setVisibility] = useState<boolean>(false)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRestaurants())
  }, [])

  return (
    <div className={s.container}>
      <button
        onClick={() => setVisibility(!visibility)}
        className={['modal-handler', s.btn].join(' ')}
      >
        click
      </button>
      <button
        onClick={() => setVisibility(!visibility)}
        className={['modal-handler', s.btn2].join(' ')}
      >
        click
      </button>

      <RestaurantList />
      <Map />
      <Modal visibility={visibility} setVisibility={setVisibility}>
        {/* <div style={{ padding: 50, width: 400, height: 300 }}> */}
        btn2dasd asd asd as dasasdasd
        {/* </div> */}
      </Modal>
    </div>
  )
}

export default Main
