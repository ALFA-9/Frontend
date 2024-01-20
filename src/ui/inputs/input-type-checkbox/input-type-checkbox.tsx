import { FC } from 'react';
import styles from './input-type-checkbox.module.scss';

interface IInputTypeCheckbox
  extends React.InputHTMLAttributes<HTMLInputElement> {
  extraClass?: string;
  label?: string;
}

const InputTypeCheckbox: FC<IInputTypeCheckbox> = ({
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
      <span className={styles.checkbox} />
      {label}
    </label>
  );
};

export default InputTypeCheckbox;
