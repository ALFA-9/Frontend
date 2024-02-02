import styles from './comment.module.scss';
import { FC } from 'react';

interface ICommentProps {
  data: {
    image: string,
    employee: string,
    employeePost: string,
    pubDate: string,
    body: string
  },
  isHidden?: boolean
}

const Comment: FC<ICommentProps> = ({ data, isHidden = false }) => {
  const { image, employee, employeePost, pubDate, body } = data;

  return (
    <div className={`${styles.container} ${isHidden ? styles.hidden : ''}`}>
      <div className={styles.header}>
        <img src={image} alt={employee} className={styles.avatar} />
        <div className={styles.author}>
          <p className={styles.authorName}>{employee}</p>
          <p className={styles.authorPost}>{employeePost}</p>
        </div>
        <p className={styles.published}>{pubDate}</p>
      </div>
      <p className={styles.text}>{body}</p>
    </div>
  )
}

export default Comment;