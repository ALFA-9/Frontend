import styles from './error.module.scss'
import { FC } from 'react'

interface NotFoundType {
  text: string
}

const ErrorPage: FC<NotFoundType> = ({ text }) => {
  return <p className={styles.title}>{text}</p>
}

export default ErrorPage
