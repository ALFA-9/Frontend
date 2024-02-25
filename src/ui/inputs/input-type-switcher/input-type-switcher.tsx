import { FC } from 'react'
import styles from './input-type-switcher.module.scss'

interface IInputTypeSwitcher
  extends React.InputHTMLAttributes<HTMLInputElement> {
  extraClass?: string
  label?: string
}

const InputTypeSwitcher: FC<IInputTypeSwitcher> = ({
  extraClass = '',
  label = '',
  ...InputHTMLAttributes
}) => {
  return (
    <label htmlFor={InputHTMLAttributes.id} className={styles.label_container}>
      <input
        type="checkbox"
        {...InputHTMLAttributes}
        className={`${styles.original_input} ${extraClass}`}
      />
      <div className={styles.swith}>
        <div className={styles.toogle} />
      </div>
      {label}
    </label>
  )
}

export default InputTypeSwitcher
