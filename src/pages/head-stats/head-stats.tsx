import { FC } from 'react'
import styles from './head-stats.module.scss'
import StatsEmployeesList from '../../components/stats-employees-list/stats-employees-list'
import { nodesData } from '../../utils/_temp/const-employees-list-node_temp'
import ButtonBack from '../../ui/buttons/button-back/button-back'
import { routes } from '../../utils/const-routes'

const HeadStats: FC = () => {
  return (
    <>
      <ButtonBack path={routes.main} />
      <h1 className={styles.title}>Статистика ИПР сотрудников</h1>
      <StatsEmployeesList nodesData={nodesData} />
    </>
  )
}

export default HeadStats
