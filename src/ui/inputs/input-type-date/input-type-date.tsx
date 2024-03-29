import { UniversalDateInput } from '@alfalab/core-components-universal-date-input'
import { Calendar } from '@alfalab/core-components-calendar'
import styles from './input-type-date.module.scss'
import { FC } from 'react'

interface IInputTypeDate {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>, payload: unknown) => void
  placeholder?: string
  id: string
  name: string
}

const InputTypeDate: FC<IInputTypeDate> = ({
  value,
  onChange,
  placeholder = '',
  id,
  name,
}) => {
  const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    payload: {
      value: string
    },
  ) => {
    onChange(event, { ...payload, id, name })
  }
  return (
    <UniversalDateInput
      breakpoint={1024}
      addonsClassName={styles.addons}
      fieldClassName={styles.field}
      inputClassName={styles.input}
      focusedClassName={styles.focused}
      filledClassName={styles.filled}
      wrapperClassName={styles.wrapper}
      block={true}
      view="date"
      size="s"
      placeholder={placeholder}
      value={value}
      onChange={onChangeHandler}
      disableUserInput={false}
      picker={true}
      Calendar={Calendar}
      calendarProps={{
        selectorView: 'full',
        responsive: false,
        className: `${styles.calendar}`,
        headerClassName: `${styles.calendarHeader}`,
        contentClassName: `${styles.calendarContent}`,
      }}
    />
  )
}

export default InputTypeDate
