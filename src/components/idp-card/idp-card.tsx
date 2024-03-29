import { FC, MouseEventHandler, useEffect, useState } from 'react'
import styles from './idp-card.module.scss'
import jpg from '../../images/_temp/idp.jpeg'
import LablesBig from '../../ui/lables/lables-big/lables-big'
import { LablesSmallEnum } from '../../ui/lables/types'
import {
  DropDownMenuItemType,
  IdpStatuses,
  IdpStatusesTranslate,
} from '../../types'
import { Link, useLocation } from 'react-router-dom'
import Dots from '../../images/icons/three_dots.svg'
import DropDownMenu from '../../ui/drop-down-menu/drop-down-menu'
import { UserTypeIdp } from '../../api/api-types'
import { useAppDispatch } from '../../redux/hooks'
import { patcIdpActiveEmployee } from '../../redux/slices/head-employees-employee-slice'
import { pathIdpStatus } from '../../api/api'
import { AxiosError } from 'axios'
interface IdpCardType {
  data: UserTypeIdp
  extraInfo?: boolean
  isHead?: boolean
}

const IdpCard: FC<IdpCardType> = ({ data, extraInfo, isHead }) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState<boolean>(false)
  const [isInProgress, setIsInProgress] = useState<boolean>(false)
  const [taskStatusColor, setTaskStatusColor] = useState<LablesSmallEnum>(
    LablesSmallEnum.blue,
  )

  const dispatch = useAppDispatch()

  const { current_task, director, id, progress, status_idp, title } = data

  const location = useLocation()

  const currentTime = Date.now()
  const deadline = Date.parse(current_task?.date_end)
  const deadlineColor =
    currentTime < deadline ? LablesSmallEnum.green : LablesSmallEnum.red

  useEffect(() => {
    switch (status_idp) {
      case 'in_work':
        setTaskStatusColor(LablesSmallEnum.blue)
        setIsInProgress(true)
        break

      case 'done':
        setTaskStatusColor(LablesSmallEnum.green)
        setIsInProgress(false)
        break

      case 'cancelled':
        setTaskStatusColor(LablesSmallEnum.orange)
        setIsInProgress(false)
        break

      case 'not_completed':
        setTaskStatusColor(LablesSmallEnum.red)
        setIsInProgress(false)
        break
    }
  }, [status_idp])

  const clickReset = () => {
    setIsOptionsOpen(false)
    document.body.removeEventListener('click', clickReset)
  }

  const openOptionsList: MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault()
    e.stopPropagation()
    if (isOptionsOpen) {
      setIsOptionsOpen(false)
      document.body.removeEventListener('click', clickReset)
      return
    }
    setIsOptionsOpen(true)
    document.body.addEventListener('click', clickReset)
  }

  async function receivingUserData(status_idp: IdpStatuses) {
    try {
      await pathIdpStatus({ idp: id, status_idp, title })
      dispatch(patcIdpActiveEmployee({ id: id, status_idp: status_idp }))
    } catch (error) {
      const err = error.toJSON() as AxiosError
      console.log(err.message)
    }
  }

  const handleApproveClick: MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault()
    e.stopPropagation()
    receivingUserData('done')
  }

  const handleCancelClick: MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault()
    e.stopPropagation()
    receivingUserData('cancelled')
  }

  const dropDownList: DropDownMenuItemType[] = [
    {
      onClick: handleApproveClick,
      text: 'Подтвердить',
      isRed: false,
    },
    {
      onClick: handleCancelClick,
      text: 'Отменить ИПР',
      isRed: true,
    },
  ]

  return (
    <Link
      to={location.pathname + '/' + id + '/tasks'}
      className={`${styles.container}`}
    >
      {isHead && (
        <LablesBig
          color={taskStatusColor}
          text={IdpStatusesTranslate[status_idp]}
          extraStyles={styles.lable_big}
        />
      )}
      <img className={styles.img} src={jpg} alt={title} />
      <div className={`${styles.info_wrapper}`}>
        <div className={styles.title_wrapper}>
          <h2 className={styles.title}>{title}</h2>
          {isHead && isInProgress && (
            <div className={styles.button_wrapper}>
              <button onClick={openOptionsList} className={styles.title_button}>
                <Dots className={styles.title_svg} />
              </button>
              <DropDownMenu isOpen={isOptionsOpen} items={dropDownList} />
            </div>
          )}
        </div>
        {extraInfo && (
          <div className={styles.extra_info_wrapper}>
            <div className={styles.progress_bar_wrapper}>
              <p className={styles.progress_bar_text}>{progress + '%'}</p>
              <div className={styles.progress_bar_empty}>
                <div
                  className={styles.progress_bar_filled}
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
            <div className={styles.all_text_wrapper}>
              <div className={styles.text_wrapper_left}>
                <div className={styles.text_wrapper}>
                  <p className={styles.text_gray}>Текущая задача</p>
                  <p className={styles.text_black}>{current_task?.name}</p>
                </div>
                <div className={styles.text_wrapper}>
                  <p className={styles.text_gray}>Назначил</p>
                  <p className={styles.text_black}>{director}</p>
                </div>
              </div>
              <div
                className={`${styles.text_wrapper} ${styles.text_wrapper_right}`}
              >
                <p className={styles.text_gray}>Ближайший дедлайн</p>
                <LablesBig
                  color={current_task ? deadlineColor : LablesSmallEnum.green}
                  text={current_task?.date_end || 'нет'}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </Link>
  )
}

export default IdpCard
