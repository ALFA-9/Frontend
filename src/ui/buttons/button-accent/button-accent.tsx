import styles from './button-accent.module.scss';
import { FC } from 'react';
import { Link } from 'react-router-dom';

type TButtonAccentProps = {
  title: string,
  path: string,
  disabled?: boolean,
  extraClass?: string
}

const ButtonAccent: FC<TButtonAccentProps> = ({
  title = '',
  path = '',
  disabled = false,
  extraClass = '',
  ...InputHTMLAttributes
}) => {

  return (
    <Link
      to={path}
      {...InputHTMLAttributes}
      className={`${styles.button} ${disabled ? styles.disabled : ''} ${extraClass}`}
    >
      {title}
    </Link>
  )
}

export default ButtonAccent;
