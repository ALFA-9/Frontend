import { FC } from 'react'
import { TreeNodeMod } from '../../types'
import { TreeTogglerTemplateOptions } from 'primereact/tree'
import styles from './employees-list-toggler-template.module.scss'
import Arrow from '../../images/icons/employee-temalate-arrow.svg'

const TogglerTemplate: FC = (
  node: TreeNodeMod,
  options: TreeTogglerTemplateOptions,
) => {
  if (!node) {
    return
  }

  const lvl = node.lvl

  const expanded = options.expanded

  const dontHaveChildrens = node.children?.length < 1
  return (
    <div
      className={`${styles.outer_container} ${
        expanded && styles.outer_container_active
      }`}
      style={{ marginLeft: `${lvl * 25}px` }}
    >
      {!dontHaveChildrens && (
        <button
          type="button"
          className={`${styles.button}`}
          tabIndex={-1}
          onClick={options.onClick}
        >
          <Arrow
            className={`${styles.svg} ${expanded && styles.svg_active}`}
            style={{ visibility: 'visible' }}
          />
        </button>
      )}
    </div>
  )
}

export default TogglerTemplate
