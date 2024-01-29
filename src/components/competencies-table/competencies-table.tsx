import { FC } from 'react'
import styles from './competencies-table.module.scss'
import {  ScoreType } from '../../types'

interface ScoreComponentType {
  score: number
  isAverageRating?: boolean
}

const Score: FC<ScoreComponentType> = ({ score, isAverageRating }) => {
  let color: string
  if (0 <= score && score < 4) {
    color = styles.score_number_red
  } else if (4 <= score && score < 7) {
    color = styles.score_number_orange
  } else if (7 <= score && score <= 10) {
    color = styles.score_number_green
  } else {
    return
  }

  if (isAverageRating) {
    return <p className={`${styles.score_number} ${color}`}>{score}</p>
  }
  return <p className={`${styles.score_number} ${color}`}>{score + '/10'}</p>
}

const ListItem: FC<ScoreType> = ({ name, score }) => {
  return (
    <li className={styles.list_item}>
      <p className={styles.list_item_text}>{name}</p>
      <Score score={score} />
    </li>
  )
}

interface CompetenciesTableType {
  scors?: ScoreType[]
  title: string
}

const CompetenciesTable: FC<CompetenciesTableType> = ({ title, scors }) => {

  const averageRating: number =
    Math.round(
      (scors.reduce(
        (accumulator, currentValue) => accumulator + currentValue.score,
        0
      ) /
        scors.length) *
        10
    ) / 10

  return (
    <article className={styles.container}>
      <div className={styles.title_wrapper}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.average_score_wrapper}>
          <p className={styles.average_score_text}>Средняя оценка</p>
          <Score score={averageRating} isAverageRating={true} />
        </div>
      </div>
      <ul className={styles.list}>
        {scors.map((item, i) => (
          <ListItem key={i} name={item.name} score={item.score} />
        ))}
      </ul>
    </article>
  )
}

export default CompetenciesTable
