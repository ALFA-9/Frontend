import { FC } from 'react'
import styles from './employee-competencies.module.scss'
import CompetenciesTable from '../../components/competencies-table/competencies-table'
import {
  hardSkillsCompetencies,
  softSkillsCompetencies,
} from '../../utils/_temp/const-competencies-tables'

const EmployeeCompetencies: FC = () => {
  return (
    <>
      <h1 className={styles.title}>Компетенции</h1>
      <div className={styles.table_wrapper}>
        <CompetenciesTable data={softSkillsCompetencies} />
        <CompetenciesTable data={hardSkillsCompetencies} />
      </div>
    </>
  )
}

export default EmployeeCompetencies
