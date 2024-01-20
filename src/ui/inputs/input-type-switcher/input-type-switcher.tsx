import { FC } from 'react';
import styles from './input-type-switcher.module.scss';

interface IInputTypeSwitcher
  extends React.InputHTMLAttributes<HTMLInputElement> {
  extraClass?: string;
  label?: string;
}

const InputTypeSwitcher: FC<IInputTypeSwitcher> = ({
  extraClass = '',
  label = '',
  ...InputHTMLAttributes
}) => {
  return (
    <label htmlFor={InputHTMLAttributes.id} className={styles.check}>
      <input
        type="checkbox"
        {...InputHTMLAttributes}
        className={`${styles.check_input} ${extraClass}`}
      />
      <div className={styles.swith}>
        <div className={styles.toogle} />
      </div>
      {label}
    </label>
  );
};

export default InputTypeSwitcher;
