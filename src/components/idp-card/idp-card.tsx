import { FC, MouseEventHandler, TransitionEventHandler, useState } from 'react'
import styles from './idp-card.module.scss'
import jpg from '../../images/_temp/idp.jpeg'
import LablesBig from '../../ui/lables/lables-big/lables-big'
import { LablesSmallEnum } from '../../ui/lables/types'
import {
  DropDownMenuItemType,
  IdpStatusesTranslate,
  IdpType,
} from '../../types'
import { Link, useLocation } from 'react-router-dom'
import Dots from '../../images/icons/three_dots.svg'
import DropDownMenu from '../../ui/drop-down-menu/drop-down-menu'

interface IdpCardType {
  data: IdpType
  extraInfo?: boolean
  isHead?: boolean
}

const IdpCard: FC<IdpCardType> = ({ data, extraInfo, isHead }) => {
  const [tasksProgress, setTasksProgress] = useState<string>('50%')
  const [isOptionsOpen, setIsOptionsOpen] = useState<boolean>(false)
  const { currentTask, deadline, head, tasks, title, status, id } = data

  const location = useLocation()

  let taskStatusColor: LablesSmallEnum
  switch (status) {
    case 'in_progress':
      taskStatusColor = LablesSmallEnum.blue
      break
    case 'completed':
      taskStatusColor = LablesSmallEnum.green
      break
    case 'cancelled':
      taskStatusColor = LablesSmallEnum.orange
      break
    case 'failed':
      taskStatusColor = LablesSmallEnum.red
      break
  }

  const clickReset = () => {
    setIsOptionsOpen(false)
    document.body.removeEventListener('click', clickReset)
  }

  const openOptionsList: MouseEventHandler<HTMLButtonElement> = (e) => {
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

  const handleTestClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    console.log('click')
  }

  const dropDownList: DropDownMenuItemType[] = [
    {
      onClick: handleTestClick,
      text: 'Подтвердить',
      isDisabled: true,
      isRed: false,
    },

    {
      onClick: handleTestClick,
      text: 'Отменить ИПР',
      isDisabled: true,
      isRed: true,
    },
  ]

  return (
    <Link
      to={location.pathname + '/' + id + '/tasks'}
      className={`${styles.container}`}>
      {isHead && (
        <LablesBig
          color={taskStatusColor}
          text={IdpStatusesTranslate[status]}
          extraStyles={styles.lable_big}
        />
      )}
      <img className={styles.img} src={jpg} alt={title} />
      <div className={`${styles.info_wrapper}`}>
        <div className={styles.title_wrapper}>
          <h2 className={styles.title}>{title}</h2>
          {isHead && (
            <div className={styles.button_wrapper}>
              <button
                onClick={openOptionsList}
                className={styles.title_button}>
                <Dots className={styles.title_svg} />
              </button>
              <DropDownMenu isOpen={isOptionsOpen} items={dropDownList} />
            </div>
          )}
        </div>
        {extraInfo && (
          <div className={styles.extra_info_wrapper}>
            <div className={styles.progress_bar_wrapper}>
              <p className={styles.progress_bar_text}>{tasksProgress}</p>
              <div className={styles.progress_bar_empty}>
                <div
                  className={styles.progress_bar_filled}
                  style={{ width: `${tasksProgress}` }}></div>
              </div>
            </div>
            <div className={styles.all_text_wrapper}>
              <div className={styles.text_wrapper_left}>
                <div className={styles.text_wrapper}>
                  <p className={styles.text_gray}>Текущая задача</p>
                  <p className={styles.text_black}>{currentTask}</p>
                </div>
                <div className={styles.text_wrapper}>
                  <p className={styles.text_gray}>Назначил</p>
                  <p className={styles.text_black}>{head}</p>
                </div>
              </div>
              <div
                className={`${styles.text_wrapper} ${styles.text_wrapper_right}`}>
                <p className={styles.text_gray}>Ближайший дедлайн</p>
                <LablesBig color={LablesSmallEnum.green} text={deadline} />
              </div>
            </div>
          </div>
        )}
      </div>
    </Link>
  )
}

export default IdpCard
