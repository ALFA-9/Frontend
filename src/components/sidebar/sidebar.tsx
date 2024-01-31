import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import styles from './sidebar.module.scss'
import SidebarList from '../sidebar-list/sidebar-list'
import { mainSidebarItems } from '../../utils/const-side-main-sidebar-items'
import { FC } from 'react'
import {
  headSidebarItems,
  idpSidebarItems,
} from '../../utils/const-sidebar-items'
import { routes } from '../../utils/const-routes'

const Sidebar: FC = () => {
  const location = useLocation()

  return (
    <nav
      className={`${styles.content} ${
        location.pathname === routes.main && styles.content_main_gallery
      }`}>
      {location.pathname === routes.main && (
        <h2 className={styles.title}>Сервисы</h2>
      )}
      <Routes>
        <Route
          path={routes.main}
          element={<SidebarList mainSidebarItems={mainSidebarItems} />}
        />
        <Route path={routes.employeeIdpForm + '/*'} element={<></>} />
        <Route path={routes.employeeIdpTasks + '/*'} element={<></>} />
        <Route
          path={routes.employee + '/*'}
          element={<SidebarList mainSidebarItems={idpSidebarItems} />}
        />
        <Route
          path={routes.head + '/*'}
          element={<SidebarList mainSidebarItems={headSidebarItems} />}
        />
        <Route path={routes.headStaffId + '/*'} element={<></>} />
      </Routes>
    </nav>
  )
}

export default Sidebar
