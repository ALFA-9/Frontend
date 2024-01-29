import { FC } from 'react';
import styles from './input-type-radiobutton.module.scss';

interface IInputTypeRadiobutton
  extends React.InputHTMLAttributes<HTMLInputElement> {
  extraClass?: string;
  label?: string;
}

const InputTypeRadiobutton: FC<IInputTypeRadiobutton> = ({
  extraClass = '',
  label = '',
  ...InputHTMLAttributes
}) => {
  return (
    <label htmlFor={InputHTMLAttributes.id} className={styles.label_container}>
      <input
        type='radio'
        className={styles.original_input}
        {...InputHTMLAttributes}
      />
      <div className={styles.visible_input} />
      {label}
    </label>
  );
};

export default InputTypeRadiobutton;
