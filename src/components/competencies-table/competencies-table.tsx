import { FC } from 'react'
import styles from './competencies-table.module.scss'

const CompetenciesTable: FC = () => {
  return (
    <article className={styles.container}>
      <div className={styles.title_wrapper}>
        <h2 className={styles.title}>Заголовок</h2>
        <div className={styles.average_score_wrapper}>
          <p>Средняя оценка</p>
          <p>5.2</p>
        </div>
      </div>
    </article>
  )
}

export default CompetenciesTable
