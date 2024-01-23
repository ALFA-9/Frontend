import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom'
import styles from './sidebar.module.scss'
import SidebarList from '../sidebar-list/sidebar-list'
import { mainSidebarItems } from '../../utils/const-side-main-sidebar-items'
import { FC } from 'react'
import { idpSidebarItems } from '../../utils/const-idp-sidebar-items'
import { routes } from '../../utils/const-routes'
import ButtonAccent from '../../ui/buttons/button-accent/button-accent'
import ButtonBack from '../../ui/buttons/button-back/button-back'

const Sidebar: FC = () => {
  const location = useLocation()
  const navigate = useNavigate()

  function handleButtonBackClick() {
    navigate(-1)
  }

  return (
    <nav
      className={`${styles.content} ${
        location.pathname === routes.main && styles.content_main_gallery
      }`}>
      {location.pathname !== routes.main && (
        <ButtonBack onClick={handleButtonBackClick} text='Назад' />
      )}
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
      </Routes>
    </nav>
  )
}

export default Sidebar
