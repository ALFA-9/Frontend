import { FC, useState } from 'react'
import styles from './input-type-select-small.module.scss'
import ArrowSvg from '../../../images/icons/employee-temalate-arrow.svg'
import { Link, useNavigate } from 'react-router-dom'
import { EnumUserStatuses, userStatus } from '../../../types'

interface InputTypeSelectSmallType {
  extraStyles: string
  data: userStatus[]
}

const InputTypeSelectSmall: FC<InputTypeSelectSmallType> = ({
  extraStyles,
  data,
}) => {
  const [userStatus, setUserStatus] = useState<EnumUserStatuses>(
    EnumUserStatuses.employee
  )
  const [isListOpen, setIsListOpen] = useState<boolean>(false)

  const clickReset = () => {
    setIsListOpen(false)
    document.body.removeEventListener('click', clickReset)
  }

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation()
    if (isListOpen) {
      setIsListOpen(false)
      document.body.removeEventListener('click', clickReset)
      return
    }
    setIsListOpen(true)
    document.body.addEventListener('click', clickReset)
  }

  return (
    <article className={`${styles.container} ${extraStyles}`}>
      <button
        onClick={handleClick}
        className={`${styles.button} ${isListOpen && styles.button_active}`}>
        <div>
          <p className={styles.text_role}>Role</p>
          <p className={styles.text_status}>{userStatus}</p>
        </div>
        <ArrowSvg
          className={`${styles.svg} ${isListOpen && styles.svg_active}`}
        />
      </button>
      <ul className={`${styles.ul} ${isListOpen && styles.ul_active}`}>
        {data.map((item, i) => (
          <InputTypeSelectSmallItem
            data={item}
            setUserStatus={setUserStatus}
            key={item.status}
          />
        ))}
      </ul>
    </article>
  )
}

export default InputTypeSelectSmall

interface InputTypeSelectSmallItemType {
  data: userStatus
  setUserStatus: React.Dispatch<React.SetStateAction<EnumUserStatuses>>
}

const InputTypeSelectSmallItem: FC<InputTypeSelectSmallItemType> = ({
  data,
  setUserStatus,
}) => {
  const { path, status, disabled } = data
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(path)
    setUserStatus(status)
  }

  return (
    <li>
      <button
        onClick={handleClick}
        disabled={disabled}
        className={`${styles.ul_item_button} ${
          disabled && styles.ul_item_button_disabled
        }`}>
        {status}
      </button>
    </li>
  )
}
