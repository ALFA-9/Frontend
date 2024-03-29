import { Link, useLocation } from 'react-router-dom'
import styles from './menu-item.module.scss'
import { MenuNavItemType } from '../../types'
import { FC } from 'react'

interface MenuItemComponent {
  item: MenuNavItemType
}

const MenuItem: FC<MenuItemComponent> = ({ item }) => {
  const { name, nav, textColorGray, Svg, isMainMenu } = item
  const location = useLocation()

  const active = location.pathname.includes(nav)

  return (
    <li>
      <Link
        to={nav}
        className={`${styles.link} ${textColorGray && styles.link_gray} ${
          active && styles.link_active
        } ${isMainMenu && styles.link_main}`}
      >
        {isMainMenu ? (
          <Svg className={styles.svg_main} />
        ) : (
          <Svg className={styles.svg} />
        )}
        <p className={styles.text}>{name}</p>
      </Link>
    </li>
  )
}

export default MenuItem
