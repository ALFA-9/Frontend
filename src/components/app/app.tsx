import styles from './app.module.scss'
import AppHeader from '../app-header/app-header'
import AppFooter from '../app-footer/app-footer'
import Sidebar from '../sidebar/sidebar'
import Content from '../content/content'
import { useLocation } from 'react-router-dom'
import InputTypeSelectSmall from '../../ui/inputs/input-type-select-small/input-type-select-small'
import { getUserMe, postToken } from '../../api/api'
import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import {
  setActiveUser,
  setIsRequestSetActiveUser,
  setIsSuccessSetActiveUser,
  setIsFailedSetActiveUser,
  setErrMessageSetActiveUser,
} from '../../redux/slices/active-user-slice'
import { EnumUserStatuses } from '../../types'
import { routes } from '../../utils/const-routes'
import ErrorPage from '../../pages/not-found/error'
import LoaderCircle from '../loader/loader'

export default function App() {
  const location = useLocation()
  const { isFailed, isRequest, isSuccess, user, errMessage } = useAppSelector(
    state => state.activeUser,
  )
  const dispatch = useAppDispatch()

  async function receivingUserData() {
    dispatch(setIsFailedSetActiveUser(false))
    dispatch(setIsRequestSetActiveUser(true))
    try {
      const token = await postToken()
      localStorage.setItem('token', token.data.token)
      const currentUser = await getUserMe()
      dispatch(setActiveUser(currentUser.data))
      dispatch(setIsSuccessSetActiveUser(true))
    } catch (error) {
      dispatch(setIsFailedSetActiveUser(true))
      dispatch(
        setErrMessageSetActiveUser(
          `Ошибка ${
            error.toJSON().status === null ? 502 : error.toJSON().status
          }`,
        ),
      )
    } finally {
      dispatch(setIsRequestSetActiveUser(false))
    }
  }

  useEffect(() => {
    receivingUserData()
  }, [])

  const userStatuses = [
    {
      status: EnumUserStatuses.employee,
      path: routes.employeeIdp,
    },
    {
      status: EnumUserStatuses.head,
      path: routes.headStats,
      disabled: !user.is_director,
    },
    {
      status: EnumUserStatuses.mentor,
      path: '#',
      disabled: true,
    },
  ]

  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <div
          className={`${styles.main__wrapper} ${
            location.pathname === '/' && styles.main_wrapper_main_gallery
          }`}
        >
          <InputTypeSelectSmall
            extraStyles={styles.input_small}
            data={userStatuses}
          />
          {isFailed && <ErrorPage text={errMessage} />}
          {isRequest && <LoaderCircle />}
          {isSuccess && !isRequest && (
            <>
              <Sidebar />
              <Content />
            </>
          )}
        </div>
      </main>
      <AppFooter />
    </>
  )
}
