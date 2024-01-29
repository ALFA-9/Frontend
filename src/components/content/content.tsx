import { FC } from 'react'
import styles from './content.module.scss'
import { Route, Routes, useLocation, useParams } from 'react-router-dom'
import MainGallery from '../../pages/main-gallery/main-gallery'
import EmployeeIdp from '../../pages/employee-idp/employee-idp'
import EmployeeForm from '../../pages/employee-form/employee-form'
import competenciesImg from '../../images/_temp/competencies.jpg'
import { UiPage } from '../../pages/ui-page/ui-page'
import { routes } from '../../utils/const-routes'
import EmployeeCompetencies from '../../pages/employee-competencies/employee-competencies'
import HeadEmployees from '../../pages/head-empoyees/head-empoyees'
import HeadStats from '../../pages/head-stats/head-stats'
import HeadEmpoyeesEmployee from '../../pages/head-empoyees-employee/head-empoyees-employee'
import EmployeeIdpForm from '../../pages/idp-tasks/idp-tasks'
import IdpTasks from '../../pages/idp-tasks/idp-tasks'

const Content: FC = () => {
  const location = useLocation()

  return (
    <section
      className={`${styles.content} ${
        location.pathname === '/' && styles.content_main_gallery
      }`}>
      <Routes>
        <Route path={routes.main} element={<MainGallery />} />
        <Route path={routes.employeeIdp} element={<EmployeeIdp />} />
        <Route
          path={routes.employeeIdpTasks}
          element={<h1>employeeIdpTasks</h1>}
        />
        <Route path='/idp/ui' element={<UiPage />} />
        <Route
          path={routes.employeeCompetencies}
          element={<EmployeeCompetencies />}
        />
        <Route path={routes.employeeIdpForm} element={<EmployeeForm />} />
        <Route
          path={routes.employeeIdpFormDone}
          element={<h1>employeeFormDone</h1>}
        />

        <>
          <Route path={routes.head} element={<h1>Head</h1>} />
          <Route path={routes.headStats} element={<HeadStats />} />
          <Route path={routes.headStaff} element={<HeadEmployees />} />
          <Route
            path={routes.headStaffId}
            element={<HeadEmpoyeesEmployee />}
          />
          <Route path={routes.headStaffIdTasks} element={<IdpTasks />} />
        </>
      </Routes>
    </section>
  )
}
export default Content
