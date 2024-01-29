import { FC, MouseEventHandler } from 'react'
import styles from './stats-employee-template.module.scss'
import jpeg from '../../images/_temp/template.jpeg'
import { useNavigate } from 'react-router-dom'
import { TreeNodeMod } from '../../types'
import { routes } from '../../utils/const-routes'
import LablesSmall from '../../ui/lables/lables-small/lables-small'
import { LablesSmallEnum } from '../../ui/lables/types'

interface StatsEmployeeTemplateType {
  data: TreeNodeMod
}

const StatsEmployeeTemplate: FC<StatsEmployeeTemplateType> = ({ data }) => {
  const navigate = useNavigate()

  const { label, id, subtitle, status, avatar } = data

  let statusColor
  let statusText

  switch (status) {
    case 'in_progress':
      statusColor = LablesSmallEnum.blue
      statusText = 'В работе'
      break
    case 'missing':
      statusColor = LablesSmallEnum.gray
      statusText = 'Отсутсвует'
      break
    case 'cancelled':
      statusColor = LablesSmallEnum.orange
      statusText = 'Отменено'
      break
    case 'failed':
      statusColor = LablesSmallEnum.red
      statusText = 'Не выполнено'
      break
    case 'completed':
      statusColor = LablesSmallEnum.green
      statusText = 'Выполнено'

      break
    default:
      statusColor = LablesSmallEnum.gray
  }

  const onOuterClick: MouseEventHandler<HTMLDivElement> = () => {
    navigate(routes.headStaff + '/' + id)
  }

  return (
    <li className={`${styles.outer_container}`}>
      <div onClick={onOuterClick} className={styles.container}>
        <img className={styles.img} src={avatar} alt='#' />
        <div className={styles.text_wrapper}>
          <h3 className={styles.text_title}>{label}</h3>
          <p className={styles.text_subtitle}>{subtitle}</p>
        </div>
        <div className={styles.lable_wrapper}>
          <LablesSmall color={statusColor} text={statusText} />
        </div>
      </div>
    </li>
  )
}

export default StatsEmployeeTemplate
