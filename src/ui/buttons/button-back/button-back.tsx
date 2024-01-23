import { FC } from 'react'
import styles from './button-back.module.scss'
import Arrow from './arrow.svg'

interface ButtonBackType {
  onClick: React.MouseEventHandler<HTMLButtonElement>
  text: string
}

const ButtonBack: FC<ButtonBackType> = ({ onClick, text }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      <div className={styles.svg_wrapper}>
        <Arrow className={styles.svg} />
      </div>
      <p className={styles.text}>{text}</p>
    </button>
  )
}

export default ButtonBack
