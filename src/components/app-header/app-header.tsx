import styles from './app-header.module.scss'
import { FC } from 'react'
import Logo from '../../images/icons/logo.svg'
import Notification from '../../images/icons/bell.svg'
import { routes } from '../../utils/const-routes'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../redux/hooks'

const AppHeader: FC = () => {
  const actualUser = useAppSelector((state) => state.activeUser.user)

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
        <a href='#' className={styles.profile}>
          <img src={actualUser.image} className={styles.avatar} />
        </a>
      </div>
    </header>
  )
}

export default AppHeader
