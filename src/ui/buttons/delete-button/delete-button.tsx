import styles from './delete-button.module.scss'
import { ButtonHTMLAttributes, MouseEventHandler, FC } from 'react'
import Cross from './cross.svg'

interface IDeleteButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: MouseEventHandler<HTMLButtonElement>
  title?: string
  extraClass?: string
}

const DeleteButton: FC<IDeleteButtonProps> = ({
  onClick,
  title = 'Удалить',
  extraClass = '',
  ...InputHTMLAttributes
}) => {
  return (
    <button
      className={`${styles.button} ${extraClass}`}
      onClick={onClick}
      {...InputHTMLAttributes}
    >
      <Cross className={styles.icon} />
      <p className={styles.title}>{title}</p>
    </button>
  )
}

export default DeleteButton
