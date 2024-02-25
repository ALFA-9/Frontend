import { Link } from 'react-router-dom'
import styles from './main-screen-menu-button.module.scss'

import { FC } from 'react'

interface MainScreenMenuButtonType {
  text: string
  isBlack?: boolean
}

const MainScreenMenuButton: FC<MainScreenMenuButtonType> = ({
  text,
  isBlack,
}) => {
  return (
    <Link className={`${styles.link} ${isBlack && styles.link_black}`} to="#">
      {text}
    </Link>
  )
}

export default MainScreenMenuButton
