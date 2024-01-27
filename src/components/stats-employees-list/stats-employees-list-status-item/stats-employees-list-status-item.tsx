import { FC } from 'react'
import styles from '../stats-employees-list.module.scss'
import { StatusType, statusColorsType } from '../../../types'

interface StatsEmployeesListStatusItemType {
  item: StatusType
  setFilterStatus: React.Dispatch<React.SetStateAction<statusColorsType>>
  setIsFilterListOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const StatsEmployeesListStatusItem: FC<StatsEmployeesListStatusItemType> = ({
  item,
  setFilterStatus,
  setIsFilterListOpen,
}) => {
  const handleClick = () => {
    setFilterStatus(item.style)
    setIsFilterListOpen(false)
  }

  return (
    <li>
      <button onClick={handleClick} className={styles.status_list_button}>
        <div
          className={`${styles.status_list_button_ball} ${
            styles[`${item.style}`]
          }`}></div>
        <p className={styles.status_list_button_text}>{item.text}</p>
      </button>
    </li>
  )
}

export default StatsEmployeesListStatusItem
