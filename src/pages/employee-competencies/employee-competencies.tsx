import { FC } from 'react'
import styles from './employee-competencies.module.scss'
import CompetenciesTable from '../../components/competencies-table/competencies-table'
import ButtonBack from '../../ui/buttons/button-back/button-back'
import { routes } from '../../utils/const-routes'
import { useAppSelector } from '../../redux/hooks'

const EmployeeCompetencies: FC = () => {
  const actualUser = useAppSelector(state => state.activeUser.user)
  return (
    <>
      <ButtonBack path={routes.main} />
      <h1 className={styles.title}>Компетенции</h1>
      <div className={styles.table_wrapper}>
        <CompetenciesTable
          title={'Soft Skills'}
          scors={actualUser.soft_skills}
        />
        <CompetenciesTable
          title={'Hard Skills'}
          scors={actualUser.hard_skills}
        />
      </div>
    </>
  )
}

export default EmployeeCompetencies
