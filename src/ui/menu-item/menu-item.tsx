import { Link } from 'react-router-dom'
import png from '../../images/icons/Main_screen/action-plan.png'
import styles from './menu-item.module.scss'
import { MenuNavItemType } from '../../types'
import { FC } from 'react'

interface MenuItemComponent {
  item: MenuNavItemType
}

const MenuItem: FC<MenuItemComponent> = ({ item }) => {
  const { name, nav, src, colorGray, Svg } = item
  return (
    <li>
      <Link
        to={nav}
        className={`${styles.link} ${colorGray && styles.link_gray}`}>
        {Svg && <Svg />}
        {src && <img className={styles.img} src={src} alt={name} />}
        <p className={styles.text}>{name}</p>
      </Link>
    </li>
  )
}

export default MenuItem
