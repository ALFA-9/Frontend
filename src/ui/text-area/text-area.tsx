import { FC } from 'react'
import styles from './text-area.module.scss'

interface TextAreaType {
  context: string
  content: string
}

const TextArea: FC<TextAreaType> = ({ content, context }) => {
  return (
    <div className={styles.container}>
      <p className={styles.text_context}>{context}</p>
      <p className={styles.text_content}>{content}</p>
    </div>
  )
}

export default TextArea
