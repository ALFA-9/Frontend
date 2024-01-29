import { FC } from 'react'
import styles from './head-empoyees.module.scss'
import EmployeesList from '../../components/empoyees-list/empoyees-list'
import EmployeesListNodeTemplate from '../../components/employees-list-templates/employees-list-node-template'
import TogglerTemplate from '../../components/employees-list-templates/employees-list-toggler-template'
import ButtonBack from '../../ui/buttons/button-back/button-back'
import { routes } from '../../utils/const-routes'


const HeadEmployees: FC = () => {
  return (
    <>
      <ButtonBack path={routes.main} />
      <h1 className={styles.title}>Мои сотрудники</h1>
      <EmployeesList />
    </>
  )
}

export default HeadEmployees
