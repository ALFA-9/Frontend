import { CommentType } from '../../api/api-types';
import styles from './comment.module.scss';
import { FC } from 'react';

interface ICommentProps {
  data: CommentType,
  isHidden?: boolean
}

const Comment: FC<ICommentProps> = ({ data, isHidden = false }) => {
  const { employee, employee_image, employee_post, pub_date, body } = data;
  const url = 'https://api.new.red-hand.ru';

  return (
    <div className={`${styles.container} ${isHidden ? styles.hidden : ''}`}>
      <div className={styles.header}>
        <img src={`${url}${employee_image}`} alt={employee} className={styles.avatar} />
        <div className={styles.author}>
          <p className={styles.authorName}>{employee}</p>
          <p className={styles.authorPost}>{employee_post}</p>
        </div>
        <p className={styles.published}>{pub_date}</p>
      </div>
      <p className={styles.text}>{body}</p>
    </div>
  )
}

export default Comment;