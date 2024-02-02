import styles from './divider.module.scss';
import { FC, MouseEventHandler } from 'react';

interface IDividerProps {
  title: string,
  onClick: MouseEventHandler<HTMLButtonElement>
}

const Divider: FC<IDividerProps> = ({ title, onClick }) => {
  return (
    <button className={styles.divider} onClick={onClick}>{title}</button>
  )
}

export default Divider;