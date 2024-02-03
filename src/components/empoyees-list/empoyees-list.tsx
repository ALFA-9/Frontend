import { FC, useEffect, useState } from 'react'
import { Tree, TreeFilterOptions } from 'primereact/tree'
import EmployeesListNodeTemplate from '../employees-list-templates/employees-list-node-template'
import { nodesData } from '../../utils/_temp/const-employees-list-node_temp'
import styles from './empoyees-list.module.scss'
import TogglerTemplate from '../employees-list-templates/employees-list-toggler-template'
import { getSubordinates } from '../../api/api'
import { SubordinatesType } from '../../api/api-types'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { setEmployeesList } from '../../redux/slices/head-employees-slice'
import { TreeNodeMod } from '../../types'

const FilterDemo: FC = () => {
  const dispatch = useAppDispatch()
  const employeesList = useAppSelector((state) => state.employeesList)

  function changeType({
    first_name,
    last_name,
    patronymic,
    id,
    subordinates,
    post,
  }: SubordinatesType): TreeNodeMod {
    return {
      id: id + '',
      label: `${last_name} ${first_name} ${patronymic}`,
      avatar: '#',
      subtitle: post,
      key: id + '',
      children:
        subordinates?.length > 0
          ? subordinates.map((item) => changeType(item))
          : [],
    }
  }

  async function receivingSubordinatesList() {
    try {
      const subordinatesList = await getSubordinates()
      const employeesListNodeType = subordinatesList.data.map((item) =>
        changeType(item)
      )

      dispatch(setEmployeesList({ employeesList: employeesListNodeType }))
    } catch (error) {
      console.log(error.toJSON())
    }
  }

  useEffect(() => {
    if (employeesList.employeesList.length < 1) {
      receivingSubordinatesList()
    }
  }, [employeesList])

  return (
    <div className={styles.tree}>
      <Tree
        className={styles.example}
        nodeTemplate={EmployeesListNodeTemplate}
        togglerTemplate={TogglerTemplate}
        value={employeesList.employeesList}
        filter
        filterMode='strict'
        filterPlaceholder='Поиск по сотрудникам'
      />
    </div>
  )
}

export default FilterDemo
