import styles from './send-button.module.scss';
import { ButtonHTMLAttributes, FC } from 'react';
import SendArrow from './send.svg';

interface ISendButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  extraClass?: string
}

const SendButton: FC<ISendButtonProps> = ({
  extraClass = '',
  ...InputHTMLAttributes
}) => {

  return (
    <button
      className={`${styles.button} ${extraClass}`}
      {...InputHTMLAttributes}
    >
      <SendArrow className={styles.icon} />
    </button>
  )
}

export default SendButton;