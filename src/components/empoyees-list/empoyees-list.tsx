import { FC, useEffect } from 'react'
import { Tree } from 'primereact/tree'
import EmployeesListNodeTemplate from '../employees-list-templates/employees-list-node-template'
import styles from './empoyees-list.module.scss'
import TogglerTemplate from '../employees-list-templates/employees-list-toggler-template'
import { getSubordinates } from '../../api/api'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import {
  setEmployeesList,
  setEmployeesListIsSuccess,
  setEmployeesListIsRequest,
  setEmployeesListIsFailed,
} from '../../redux/slices/head-employees-slice'
import { changeType } from './empoyees-list-utils'
import LoaderCircle from '../loader/loader'

const FilterDemo: FC = () => {
  const dispatch = useAppDispatch()
  const { employeesList, isFailed, isRequest, isSuccess } = useAppSelector(
    state => state.employeesList,
  )

  async function receivingSubordinatesList() {
    dispatch(setEmployeesListIsRequest(true))
    dispatch(setEmployeesListIsFailed(false))
    try {
      const subordinatesList = await getSubordinates()
      const employeesListNodeType = subordinatesList.data.map(item =>
        changeType(item, 0),
      )
      dispatch(setEmployeesList(employeesListNodeType))
      dispatch(setEmployeesListIsSuccess(true))
    } catch (error) {
      dispatch(setEmployeesListIsFailed(true))
    } finally {
      dispatch(setEmployeesListIsRequest(false))
    }
  }

  useEffect(() => {
    if (!isFailed && !isRequest && !isSuccess) {
      receivingSubordinatesList()
    }
  }, [isFailed, isRequest, isSuccess])

  return (
    <div className={styles.tree}>
      {isRequest && <LoaderCircle />}
      {isSuccess && (
        <Tree
          className={styles.example}
          nodeTemplate={EmployeesListNodeTemplate}
          togglerTemplate={TogglerTemplate}
          value={employeesList}
          filter
          filterMode="strict"
          filterPlaceholder="Поиск по сотрудникам"
        />
      )}
    </div>
  )
}

export default FilterDemo
