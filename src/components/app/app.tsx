import styles from './app.module.scss'
import AppHeader from '../app-header/app-header'
import AppFooter from '../app-footer/app-footer'
import Sidebar from '../sidebar/sidebar'
import Content from '../content/content'
import { useLocation } from 'react-router-dom'
import InputTypeSelectSmall from '../../ui/inputs/input-type-select-small/input-type-select-small'
import { userStatuses } from '../../utils/const-user-statuses'
import { getUserMe, getToken } from '../../api/api'
import { useEffect, useState } from 'react'

import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { setActiveUser } from '../../redux/slices/active-user-slice'

export default function App() {
  const location = useLocation()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const activeUser = useAppSelector((state) => state.activeUser)
  const dispatch = useAppDispatch()

  async function receivingUserToken() {
    try {
      const token = await getToken()
      localStorage.setItem('token', token.data.token)
      console.log(activeUser)
      const currentUser = await getUserMe()
      dispatch(setActiveUser({ user: currentUser.data }))
      setIsLoading(false)
    } catch (error) {
      console.log(error.toJSON())
    }
  }

  useEffect(() => {
    receivingUserToken()
  }, [])

  return (
    <>
      {!isLoading && (
        <>
          <AppHeader />
          <main className={styles.main}>
            <div
              className={`${styles.main__wrapper} ${
                location.pathname === '/' && styles.main_wrapper_main_gallery
              }`}>
              <InputTypeSelectSmall
                extraStyles={styles.input_small}
                data={userStatuses}
              />
              <Sidebar />
              <Content />
            </div>
          </main>
          <AppFooter />
        </>
      )}
    </>
  )
}
