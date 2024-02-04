import styles from './app-header.module.scss'
import { FC, MouseEventHandler, useState } from 'react'
import Logo from '../../images/icons/logo.svg'
import Notification from '../../images/icons/bell.svg'
import { routes } from '../../utils/const-routes'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import DropDownMenu from '../../ui/drop-down-menu/drop-down-menu'
import {
  setUsersTest,
} from '../../redux/slices/active-user-slice'
import { DropDownMenuItemType } from '../../types'

const AppHeader: FC = () => {
  const actualUser = useAppSelector((state) => state.activeUser.user)
  const dispatch = useAppDispatch()

  const [isOptionsOpen, setIsOptionsOpen] = useState<boolean>(false)

  const clickReset = () => {
    setIsOptionsOpen(false)
    document.body.removeEventListener('click', clickReset)
  }

  const openOptionsList: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (isOptionsOpen) {
      setIsOptionsOpen(false)
      document.body.removeEventListener('click', clickReset)
      return
    }
    setIsOptionsOpen(true)
    document.body.addEventListener('click', clickReset)
  }

  const handleUserChangeHead = () => {
    dispatch(setUsersTest('zoduvon-ofe57@alfabank.ru'))
  }

  const handleUserChangeEmployee = () => {
    dispatch(setUsersTest('velejah-aco16@alfabank.ru'))
  }

  const dropDownList: DropDownMenuItemType[] = [
    {
      onClick: handleUserChangeHead,
      text: 'Руководитель',
      isDisabled: false,
      isRed: false,
    },
    {
      onClick: handleUserChangeEmployee,
      text: 'Сотрудник',
      isDisabled: false,
      isRed: false,
    },
  ]

  return (
    <header className={styles.header}>
      <Link className={styles.link_logo} to={routes.main}>
        <Logo className={styles.logo} />
      </Link>
      <nav>
        <ul className={styles.menu}>
          <li>
            <a href='#' className={styles.link}>
              Контакты
            </a>
          </li>
          <li>
            <a href='#' className={styles.link}>
              Всё о работе
            </a>
          </li>
          <li>
            <a href='#' className={styles.link}>
              Подразделения
            </a>
          </li>
        </ul>
      </nav>
      <div className={styles.trayMenu}>
        <input type='search' className={styles.search} placeholder='Поиск' />
        <a href='#' className={styles.notification}>
          <Notification className={styles.notificationIcon} />
        </a>
        <a onClick={openOptionsList} href='#' className={styles.profile}>
          <img src={actualUser.image} className={styles.avatar} />
          <DropDownMenu isOpen={isOptionsOpen} items={dropDownList} />
        </a>
      </div>
    </header>
  )
}

export default AppHeader
