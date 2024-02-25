import styles from './divider.module.scss'
import { FC, ButtonHTMLAttributes, MouseEventHandler } from 'react'

interface IDividerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  onClick: MouseEventHandler<HTMLButtonElement>
}

const Divider: FC<IDividerProps> = ({ title, onClick }) => {
  return (
    <button className={styles.divider} onClick={onClick}>
      {title}
    </button>
  )
}

export default Divider
