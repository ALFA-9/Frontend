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
    <label htmlFor={InputHTMLAttributes.id} className={styles.label_container}>
      <input
        type='checkbox'
        {...InputHTMLAttributes}
        className={`${styles.original_input} ${extraClass}`}
      />
      <span className={styles.visible_input} />
      {label}
    </label>
  );
};

export default InputTypeCheckbox;
