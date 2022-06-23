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
      <button onClick={() => setVisibility(!visibility)} className={s.btn}>
        click
      </button>
      <button onClick={() => setVisibility(!visibility)} className={s.btn2}>
        click
      </button>
      <RestaurantList />
      <Map />
      <Modal visibility={visibility} setVisibility={setVisibility} />
    </div>
  )
}

export default Main
