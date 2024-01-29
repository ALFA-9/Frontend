import { FC } from 'react'
import styles from './employee-competencies.module.scss'
import CompetenciesTable from '../../components/competencies-table/competencies-table'
import {
  hardSkillsCompetencies,
  softSkillsCompetencies,
} from '../../utils/_temp/const-competencies-tables'
import ButtonBack from '../../ui/buttons/button-back/button-back'
import { routes } from '../../utils/const-routes'

const EmployeeCompetencies: FC = () => {
  return (
    <>
      <ButtonBack path={routes.main} />
      <h1 className={styles.title}>Компетенции</h1>
      <div className={styles.table_wrapper}>
        <CompetenciesTable
          title={softSkillsCompetencies.title}
          scors={softSkillsCompetencies.scors}
        />
        <CompetenciesTable
          title={hardSkillsCompetencies.title}
          scors={hardSkillsCompetencies.scors}
        />
      </div>
    </>
  )
}

export default EmployeeCompetencies
