import { FC } from 'react'
import styles from './employee-competencies.module.scss'
import CompetenciesTable from '../../components/competencies-table/competencies-table'

const EmployeeCompetencies: FC = () => {
  return (
    <>
      <h1 className={styles.title}>Компетенции</h1>
      <div className={styles.table_wrapper}>
        <CompetenciesTable />
        <CompetenciesTable />
      </div>
    </>
  )
}

export default EmployeeCompetencies
