import styles from './error.module.scss'
import { FC } from 'react'

interface NotFoundType {
  text: string
}

const ErrorPage: FC<NotFoundType> = ({ text }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{text}</p>
    </div>
  )
}

export default ErrorPage
