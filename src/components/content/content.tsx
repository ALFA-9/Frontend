import { FC, Suspense, lazy } from 'react'
import styles from './content.module.scss'
import { Route, Routes, useLocation } from 'react-router-dom'
import { UiPage } from '../../pages/ui-page/ui-page'
import { routes } from '../../utils/const-routes'
import MainGallery from '../../pages/main-gallery/main-gallery'
import { useAppSelector } from '../../redux/hooks'
const EmployeeIdp = lazy(() => import('../../pages/employee-idp/employee-idp'))
const EmployeeForm = lazy(
  () => import('../../pages/employee-form/employee-form')
)
const EmployeeCompetencies = lazy(
  () => import('../../pages/employee-competencies/employee-competencies')
)
const HeadEmployees = lazy(
  () => import('../../pages/head-empoyees/head-empoyees')
)
const HeadStats = lazy(() => import('../../pages/head-stats/head-stats'))
const HeadEmpoyeesEmployee = lazy(
  () => import('../../pages/head-empoyees-employee/head-empoyees-employee')
)
const HeadForm = lazy(() => import('../../pages/head-form/head-form'))
const IdpTasks = lazy(() => import('../../pages/idp-tasks/idp-tasks'))

const Content: FC = () => {
  const location = useLocation()
  const activeUser = useAppSelector((state) => state.activeUser)
  return (
    <section
      className={`${styles.content} ${
        location.pathname === '/' && styles.content_main_gallery
      }`}>
      <Routes>
        <Route
          path={routes.main}
          element={
            <Suspense>
              <MainGallery />
            </Suspense>
          }
        />
        <Route
          path={routes.employeeIdp}
          element={
            <Suspense>
              <EmployeeIdp />
            </Suspense>
          }
        />
        <Route
          path={routes.employeeIdpTasks}
          element={
            <Suspense>
              <IdpTasks />
            </Suspense>
          }
        />
        <Route path='/idp/ui' element={<UiPage />} />
        <Route
          path={routes.employeeCompetencies}
          element={
            <Suspense>
              <EmployeeCompetencies />
            </Suspense>
          }
        />
        <Route
          path={routes.employeeIdpForm}
          element={
            <Suspense>
              <EmployeeForm />
            </Suspense>
          }
        />
        <Route
          path={routes.employeeIdpFormDone}
          element={<h1>employeeFormDone</h1>}
        />

        {activeUser.user.is_director && (
          <>
            <Route path={routes.head} element={<h1>Head</h1>} />
            <Route
              path={routes.headStats}
              element={
                <Suspense>
                  <HeadStats />
                </Suspense>
              }
            />
            <Route
              path={routes.headStaff}
              element={
                <Suspense>
                  <HeadEmployees />
                </Suspense>
              }
            />
            <Route
              path={routes.headStaffId}
              element={
                <Suspense>
                  <HeadEmpoyeesEmployee />
                </Suspense>
              }
            />
            <Route
              path={routes.headStaffIdTasks}
              element={
                <Suspense>
                  <IdpTasks />
                </Suspense>
              }
            />
            <Route
              path={routes.headStaffIdForm}
              element={
                <Suspense>
                  <HeadForm />
                </Suspense>
              }
            />
          </>
        )}
      </Routes>
    </section>
  )
}
export default Content
