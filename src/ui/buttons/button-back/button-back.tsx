import { FC } from 'react'
import styles from './button-back.module.scss'
import Arrow from './arrow.svg'
import { useNavigate } from 'react-router-dom'

interface ButtonBackType {
  path: string
  extraStyles?: string
}

const ButtonBack: FC<ButtonBackType> = ({ path, extraStyles }) => {
  const navigate = useNavigate()

  function handleButtonBackClick() {
    navigate(path)
  }

  return (
    <div className={styles.button_container}>
      <button
        onClick={handleButtonBackClick}
        className={`${extraStyles ? extraStyles : styles.button}`}>
        <div className={`${styles.svg_wrapper} `}>
          <Arrow className={styles.svg} />
        </div>
        <p className={styles.text}>{'Назад'}</p>
      </button>
    </div>
  )
}

export default ButtonBack
