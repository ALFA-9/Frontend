import { useLocation, useParams } from 'react-router-dom'
import ButtonBack from '../../ui/buttons/button-back/button-back'
import { routes } from '../../utils/const-routes'
import styles from './idp-tasks.module.scss'

const IdpTasks = () => {
  const location = useLocation()
  const params = useParams()

  const pathUserId = params.user_id

  function pathResolve() {
    if (location.pathname.includes(routes.employee)) {
      return routes.employeeIdp
    }
    if (location.pathname.includes(routes.head)) {
      return routes.headStaff + '/' + pathUserId
    }
  }

  return (
    <>
      <ButtonBack path={pathResolve()} />
      <div className={styles.container}>
        <h1 className={styles.title}>
          ИПР 2. Разработчик на Python. Уровень Middle
        </h1>
      </div>
    </>
  )
}

export default IdpTasks
