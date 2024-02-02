//@ts-nocheck
import { FC, useState } from 'react'
import { Tree, TreeFilterOptions } from 'primereact/tree'
import EmployeesListNodeTemplate from '../employees-list-templates/employees-list-node-template'
import { nodesData } from '../../utils/_temp/const-employees-list-node_temp'
import styles from './empoyees-list.module.scss'
import TogglerTemplate from '../employees-list-templates/employees-list-toggler-template'
const FilterDemo: FC = () => {
  const [text, setText] = useState('0-0-0')

  return (
    <div className={styles.tree}>
      <Tree
        className={styles.example}
        nodeTemplate={EmployeesListNodeTemplate}
        togglerTemplate={TogglerTemplate}
        value={nodesData}
        filter
        filterMode='strict'
        filterPlaceholder='Поиск по сотрудникам'
      />
    </div>
  )
}

export default FilterDemo
//lenient