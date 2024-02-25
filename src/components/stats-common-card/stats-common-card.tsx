import { FC } from 'react'
import styles from './stats-common-card.module.scss'

type TItemData = {
  title: string
  value: number
}

interface IStatsCommonCard {
  title: string
  itemsData: TItemData[]
  option: 'all' | 'direct'
  onClickHandler: React.Dispatch<React.SetStateAction<'all' | 'direct'>>
  id: 'all' | 'direct'
}

export const StatsCommonCard: FC<IStatsCommonCard> = ({
  title,
  itemsData,
  option,
  onClickHandler,
  id,
}) => {
  return (
    <div
      onClick={() => onClickHandler(id)}
      className={`${styles.card} ${option === id ? styles.card__selected : ''}`}
    >
      <p className={styles.title}>{title}</p>
      <div className={styles.container}>
        {itemsData.map(item => (
          <div key={item.title} className={styles.itemContainer}>
            <p className={styles.itemTitle}>{item.title}</p>
            <p className={styles.itemValue}>{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
