import { FC } from 'react'
import { MenuNavItemType } from '../../types'
import MenuItem from '../../ui/menu-item/menu-item'
import styles from './sidebar-list.module.scss'

interface SidebarList {
  mainSidebarItems: MenuNavItemType[]
}

const SidebarList: FC<SidebarList> = ({ mainSidebarItems }) => {
  return (
    <ul className={styles.list}>
      {mainSidebarItems.map(item => (
        <MenuItem key={item.name} item={item} />
      ))}
    </ul>
  )
}

export default SidebarList
