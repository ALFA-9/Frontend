import { FC } from 'react'
import styles from './head-empoyees.module.scss'
import EmployeesList from '../../components/empoyees-list/empoyees-list'
import EmployeesListNodeTemplate from '../../components/employees-list-templates/employees-list-node-template'
import TogglerTemplate from '../../components/employees-list-templates/employees-list-toggler-template'
const HeadEmployees: FC = () => {
  return (
    <>
    
      <h1 className={styles.title}>Мои сотрудники</h1>
      <EmployeesList />
    </>
  )
}

export default HeadEmployees
