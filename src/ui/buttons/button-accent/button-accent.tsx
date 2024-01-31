import styles from './button-accent.module.scss'
import { ButtonHTMLAttributes, FC } from 'react'
import { useNavigate } from 'react-router-dom'

interface IButtonAccentProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  path?: string
  extraClass?: string
}

const ButtonAccent: FC<IButtonAccentProps> = ({
  title = '',
  path = '',
  extraClass = '',
  ...InputHTMLAttributes
}) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(path)
    window.scrollTo(0, 0)
  }

  return (
    <button
      onClick={handleClick}
      className={`${styles.button} ${extraClass}`}
      {...InputHTMLAttributes}>
      {title}
    </button>
  )
}

export default ButtonAccent
