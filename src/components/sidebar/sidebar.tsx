import { Route, Routes, useLocation } from 'react-router-dom'
import styles from './sidebar.module.scss'
import SidebarList from '../sidebar-list/sidebar-list'
import { mainSidebarItems } from '../../utils/const-side-main-sidebar-items'
import { FC } from 'react'
import { idpSidebarItems } from '../../utils/const-idp-sidebar-items'

const Sidebar: FC = () => {
  const location = useLocation()

  return (
    <nav
      className={`${styles.content} ${
        location.pathname === '/' && styles.content_main_gallery
      }`}>
      {location.pathname === '/' && <h2 className={styles.title}>Сервисы</h2>}
      <Routes>
        <Route
          path='/'
          element={<SidebarList mainSidebarItems={mainSidebarItems} />}
        />
        <Route
          path='/idp/*'
          element={<SidebarList mainSidebarItems={idpSidebarItems} />}
        />
      </Routes>
    </nav>
  )
}

export default Sidebar
