import { FC, MouseEventHandler, useState } from 'react'
import styles from './stats-employees-list.module.scss'
import NameSort from '../../images/icons/stats-list-name-filter.svg'
import ArrowFilter from '../../images/icons/employee-temalate-arrow.svg'
import StatsEmployeeTemplate from '../stats-employee-template/stats-employee-template'
import { filterListItems } from '../../utils/const-status-colors'
import { TreeNodeMod, StatusColorsType } from '../../types'
import StatsEmployeesListStatusItem from './stats-employees-list-status-item/stats-employees-list-status-item'

interface StatsEmployeesListType {
  nodesData: TreeNodeMod[]
}

const StatsEmployeesList: FC<StatsEmployeesListType> = ({ nodesData }) => {
  const [sortNames, setSortNames] = useState<boolean>(true)
  const [isFilterListOpen, setIsFilterListOpen] = useState<boolean>(false)
  const [filterStatus, setFilterStatus] = useState<StatusColorsType>('all')

  const newNodesData: TreeNodeMod[] = JSON.parse(JSON.stringify(nodesData))

  sortNames && newNodesData.sort((a, b) => (a.label > b.label ? 1 : -1))
  !sortNames && newNodesData.sort((a, b) => (a.label > b.label ? -1 : 1))

  const toggleSort = () => {
    setSortNames(!sortNames)
  }

  const clickReset = () => {
    setIsFilterListOpen(false)
    document.body.removeEventListener('click', clickReset)
  }

  const openFilterList: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation()
    if (isFilterListOpen) {
      setIsFilterListOpen(false)
      document.body.removeEventListener('click', clickReset)
      return
    }
    setIsFilterListOpen(true)
    document.body.addEventListener('click', clickReset)
  }

  const filteredNodesData = newNodesData.filter((node) => {
    if (filterStatus === 'all') {
      return node
    }
    if (node.status === filterStatus) {
      return node
    }
  })

  const isSomeoneHere = filteredNodesData.length

  return (
    <article className={styles.container}>
      <div className={styles.filter_container}>
        <button
          onClick={toggleSort}
          className={`${styles.button}`}
          type='button'>
          <p className={styles.button_text}>Сотрудники</p>
          <NameSort
            className={`${styles.svg_names} ${
              !sortNames && styles.svg_names_active
            }`}
          />
        </button>
        <div className={styles.filter_button_wrapper}>
          <button
            onClick={openFilterList}
            className={`${styles.button} ${
              isFilterListOpen && styles.button_active
            }`}
            type='button'>
            <p className={styles.button_text}>Статус</p>
            <ArrowFilter
              className={`${styles.svg_status} ${
                isFilterListOpen && styles.svg_status_active
              }`}
            />
          </button>
          <ul
            className={`${styles.status_list} ${
              isFilterListOpen && styles.status_list_active
            }`}>
            {filterListItems.map((item, i) => (
              <StatsEmployeesListStatusItem
                item={item}
                setFilterStatus={setFilterStatus}
                setIsFilterListOpen={setIsFilterListOpen}
                key={i}
              />
            ))}
          </ul>
        </div>
      </div>
      <ul className={styles.ul}>
        {filteredNodesData.map((node) => (
          <StatsEmployeeTemplate data={node} key={node.key} />
        ))}
      </ul>
      {!isSomeoneHere && (
        <p className={styles.message}>
          Сотрудников с данным статусом ИПР не найдено
        </p>
      )}
    </article>
  )
}

export default StatsEmployeesList
