import { FC } from 'react'
import styles from './content.module.scss'
import { Outlet, Route, Routes, useLocation } from 'react-router-dom'
import MainGallery from '../../pages/main-gallery/main-gallery'
import Idp from '../../pages/idp/idp'
import competenciesImg from '../../images/_temp/competencies.jpg'
import { UiPage } from '../../pages/ui-page/ui-page'
import { routes } from '../../utils/const-routes'

const Content: FC = () => {
  const location = useLocation()

  return (
    <section
      className={`${styles.content} ${
        location.pathname === '/' && styles.content_main_gallery
      }`}>
      <Routes>
        <Route path={routes.main} element={<MainGallery />} />
        <Route path={routes.employeeIdp} element={<Idp />} />
        <Route
          path={routes.employeeIdpTasks}
          element={<h1>employeeIdpTasks</h1>}
        />
        <Route path='/idp/ui' element={<UiPage />} />
        <Route
          path={routes.employeeCompetencies}
          element={<img src={competenciesImg} alt='#' />}
        />
        <Route path={routes.employeeIdpForm} element={<h1>employeeForm</h1>} />
        <Route
          path={routes.employeeIdpFormDone}
          element={<h1>employeeFormDone</h1>}
        />
      </Routes>
    </section>
  )
}
UiPage
export default Content
