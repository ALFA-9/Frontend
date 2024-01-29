import { FC, MouseEventHandler, TransitionEventHandler, useState } from 'react'
import styles from './idp-card.module.scss'
import jpg from '../../images/_temp/idp.jpeg'
import LablesBig from '../../ui/lables/lables-big/lables-big'
import { LablesSmallEnum } from '../../ui/lables/types'
import { IdpStatusesTranslate, IdpType } from '../../types'
import { Link } from 'react-router-dom'
import { routes } from '../../utils/const-routes'
import Dots from '../../images/icons/three_dots.svg'

interface IdpCardType {
  data: IdpType
  extraInfo?: boolean
  isHead?: boolean
}

const IdpCard: FC<IdpCardType> = ({ data, extraInfo, isHead }) => {
  const [tasksProgress, setTasksProgress] = useState<string>('50%')
  const [isOptionsOpen, setIsOptionsOpen] = useState<boolean>(false)

  const { currentTask, deadline, head, tasks, title, status, id } = data

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

  return (
    <Link
      to={routes.employeeIdp + '/' + id + '/tasks'}
      className={`${styles.container}`}>
      {isHead && (
        <LablesBig
          color={taskStatusColor}
          text={IdpStatusesTranslate[status]}
          extraStyles={styles.lable_big}
        />
      )}
      <img className={styles.img} src={jpg} alt={title} />
      <div
        className={`${styles.info_wrapper}`}>
        <div className={styles.title_wrapper}>
          <h2 className={styles.title}>{title}</h2>
          {isHead && (
            <div className={styles.button_wrapper}>
              <button
                onClick={openOptionsList}
                className={styles.title_button}>
                <Dots className={styles.title_svg} />
              </button>
              <ul
                className={`${styles.button_list} ${
                  isOptionsOpen && styles.button_list_active
                }`}>
                <li>
                  <button disabled className={styles.button_list_item}>
                    Подтвердить
                  </button>
                </li>
                <li>
                  <button
                    disabled
                    className={`${styles.button_list_item} ${styles.button_list_item_red}`}>
                    Отменить ИПР
                  </button>
                </li>
              </ul>
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
