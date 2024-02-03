import { FC, MouseEventHandler, useEffect, useState } from 'react'
import styles from './employees-list-node-template.module.scss'
import Dots from '../../images/icons/three_dots.svg'
import { Link, useNavigate } from 'react-router-dom'
import { TreeNodeTemplateOptions } from 'primereact/tree'
import { TreeNodeMod } from '../../types'
import { routes } from '../../utils/const-routes'

const EmployeesListNodeTemplate: FC = (
  node: TreeNodeMod,
  options: TreeNodeTemplateOptions
) => {
  const navigate = useNavigate()
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false)

  console.log(node)

  const onOuterClick: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation()
    navigate(routes.headStaff + '/' + node.id)
  }

  const clickReset = () => {
    setIsPopupOpen(false)
    document.body.removeEventListener('click', clickReset)
  }

  const onInnerClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation()
    setIsPopupOpen(true)
    document.body.addEventListener('click', clickReset)
  }

  return (
    <article
      className={`${styles.outer_container} ${
        options.expanded && styles.outer_container_active
      }`}>
      <div onClick={onOuterClick} className={styles.container}>
        <img className={styles.img} src={node.avatar} alt={node.label} />
        <div className={styles.text_wrapper}>
          <h3 className={styles.text_title}>{node.label}</h3>
          <p className={styles.text_subtitle}>
            {node.subtitle ? node.subtitle : 'Хрен с горы'}
          </p>
        </div>
        <button
          disabled={isPopupOpen}
          onClick={onInnerClick}
          className={styles.button}>
          <Dots className={styles.svg} style={{ visibility: 'visible' }} />
        </button>
      </div>

      <Link
        to={routes.headStaff + '/' + node.id + '/form'}
        className={`${styles.popup} ${isPopupOpen && styles.popup_active}`}>
        <p className={styles.popup_link}>Назначить ИПР</p>
      </Link>
    </article>
  )
}

export default EmployeesListNodeTemplate
