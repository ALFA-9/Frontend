import { Link, useLocation } from 'react-router-dom'
import png from '../../images/icons/Main_screen/action-plan.png'
import styles from './menu-item.module.scss'
import { MenuNavItemType } from '../../types'
import { FC } from 'react'

interface MenuItemComponent {
  item: MenuNavItemType
}

const MenuItem: FC<MenuItemComponent> = ({ item }) => {
  const { name, nav, src, textColorGray, Svg } = item
  const location = useLocation()

  const active = location.pathname.includes(nav)

  return (
    <li>
      <Link
        to={nav}
        className={`${styles.link} ${textColorGray && styles.link_gray} ${
          active && styles.link_active
        }`}>
        {Svg && <Svg />}
        {src && <img className={styles.img} src={src} alt={name} />}
        <p className={styles.text}>{name}</p>
      </Link>
    </li>
  )
}

export default MenuItem
