import styles from './add-button.module.scss'
import { ButtonHTMLAttributes, FC } from 'react'
import Plus from './plus.svg'

interface IAddButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  extraClass?: string
}

const AddButton: FC<IAddButtonProps> = ({
  title = '',
  extraClass = '',
  ...InputHTMLAttributes
}) => {
  return (
    <button
      className={`${styles.button} ${extraClass}`}
      {...InputHTMLAttributes}
    >
      <Plus className={styles.icon} />
      <p className={styles.title}>{title}</p>
    </button>
  )
}

export default AddButton
