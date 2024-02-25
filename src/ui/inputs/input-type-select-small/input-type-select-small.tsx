import { FC, useEffect, useState } from 'react'
import styles from './input-type-select-small.module.scss'
import ArrowSvg from '../../../images/icons/employee-temalate-arrow.svg'
import { useLocation, useNavigate } from 'react-router-dom'
import { EnumUserStatuses, userStatus } from '../../../types'
import { routes } from '../../../utils/const-routes'

interface InputTypeSelectSmallType {
  extraStyles: string
  data: userStatus[]
}

const InputTypeSelectSmall: FC<InputTypeSelectSmallType> = ({
  extraStyles,
  data,
}) => {
  const [userStatus, setUserStatus] = useState<EnumUserStatuses>(
    EnumUserStatuses.employee,
  )
  const [isListOpen, setIsListOpen] = useState<boolean>(false)
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const location = useLocation()

  useEffect(() => {
    if (location.pathname.includes(routes.employee)) {
      setUserStatus(EnumUserStatuses.employee)
    }

    if (location.pathname.includes(routes.head)) {
      setUserStatus(EnumUserStatuses.head)
    }

    if (
      location.pathname === routes.main ||
      location.pathname.includes('/form') ||
      location.pathname.includes('/tasks') ||
      location.pathname.includes('/done')
    ) {
      setIsVisible(false)
    } else {
      setIsVisible(true)
    }
  }, [location.pathname])

  const clickReset = () => {
    setIsListOpen(false)
    document.body.removeEventListener('click', clickReset)
  }

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = e => {
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
    isVisible && (
      <article className={`${styles.container} ${extraStyles}`}>
        <button
          onClick={handleClick}
          className={`${styles.button} ${isListOpen && styles.button_active}`}
        >
          <div>
            <p className={styles.text_role}>Роль</p>
            <p className={styles.text_status}>{userStatus}</p>
          </div>
          <ArrowSvg
            className={`${styles.svg} ${isListOpen && styles.svg_active}`}
          />
        </button>
        <ul className={`${styles.ul} ${isListOpen && styles.ul_active}`}>
          {data.map(item => (
            <InputTypeSelectSmallItem
              data={item}
              setUserStatus={setUserStatus}
              key={item.status}
            />
          ))}
        </ul>
      </article>
    )
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
        }`}
      >
        {status}
      </button>
    </li>
  )
}
