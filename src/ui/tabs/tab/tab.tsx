import styles from './tab.module.scss'
import { useCallback, FC } from 'react'

export type TTabProps = {
  title: string
  index: number
  isActive?: boolean
  setActiveTab: (index: number) => void
}

const Tab: FC<TTabProps> = props => {
  const { title, index, isActive, setActiveTab } = props

  const handleClick = useCallback(() => {
    setActiveTab(index)
  }, [setActiveTab, index])

  const setActiveClass = () => `${styles.tab} ${isActive ? styles.active : ''}`

  return (
    <li>
      <button onClick={handleClick} className={setActiveClass()}>
        {title}
      </button>
    </li>
  )
}

export default Tab
