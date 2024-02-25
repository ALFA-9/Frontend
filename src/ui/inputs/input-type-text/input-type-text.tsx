import { FC } from 'react'
import styles from './input-type-text.module.scss'

interface IInputTypeText extends React.InputHTMLAttributes<HTMLInputElement> {
  extraClass?: string
  outerClass?: string
  label?: string
}

const InputTypeText: FC<IInputTypeText> = ({
  extraClass = '',
  outerClass = '',
  label = '',
  ...InputHTMLAttributes
}) => {
  return (
    <div className={`${styles.container} ${outerClass}`}>
      {InputHTMLAttributes.value && label && (
        <label htmlFor={InputHTMLAttributes.id} className={styles.label}>
          {label}
          {InputHTMLAttributes.required && <span>*</span>}
        </label>
      )}
      <input
        type="text"
        {...InputHTMLAttributes}
        className={`${styles.input} ${extraClass} ${InputHTMLAttributes.value ? styles.input__notEmpty : ''}`}
      />
    </div>
  )
}

export default InputTypeText
