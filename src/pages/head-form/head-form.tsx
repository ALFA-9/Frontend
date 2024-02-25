import styles from './head-form.module.scss'
import { FC, useState, useEffect } from 'react'
import InputTypeText from '../../ui/inputs/input-type-text/input-type-text'
import ButtonAccent from '../../ui/buttons/button-accent/button-accent'
import FormTask from '../../components/form-task/form-task'
import AddButton from '../../ui/buttons/add-button/add-button'
import { routes } from '../../utils/const-routes'
import ButtonBack from '../../ui/buttons/button-back/button-back'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import {
  setActiveEmployee,
  setErrorMessageActiveEmployee,
  setIsFailedActiveEmployee,
  setIsRequestActiveEmployee,
  setIsSuccessActiveEmployee,
} from '../../redux/slices/head-employees-employee-slice'
import { getUserById } from '../../api/api'
import LoaderCircle from '../../components/loader/loader'
import ErrorPage from '../not-found/error'

import { getNewDefaultTaskDTO, getObjectFromEvent } from './head-form.utils'
import { TIDPDTO } from './head-form.types'

const HeadForm: FC = () => {
  const params = useParams()
  const dispatch = useAppDispatch()
  const { user, isRequest, isFailed, isSuccess, errorMessage } = useAppSelector(
    state => state.activeEmployee,
  )
  const [newIDP, setNewIDP] = useState<TIDPDTO>({
    idpTitle: `ИПР ${user.idps.length + 1}. `,
    tasks: [getNewDefaultTaskDTO()],
  })
  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    if (user.id !== +params.user_id) {
      receivingActiveEmployee()
    }
  }, [user, params])

  const addTask = () => {
    const arr = newIDP.tasks.slice()
    arr.push(getNewDefaultTaskDTO())
    setNewIDP({ ...newIDP, tasks: arr })
  }

  const removTask = (uuid: string) => {
    const arr = newIDP.tasks.filter(item => item.uuid !== uuid)
    setNewIDP({ ...newIDP, tasks: arr })
  }

  const updateTask = (uuid: string, data: Record<string, string>) => {
    const arr = newIDP.tasks.slice().map(item => {
      if (item.uuid === uuid) {
        return { ...item, ...data }
      }
      return item
    })
    setNewIDP({ ...newIDP, tasks: arr })
  }

  const handleTaskEvent = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
      | React.FormEvent<HTMLParagraphElement | HTMLFieldSetElement>,
    uuid: string,
    payload?: unknown,
  ) => {
    const newData = getObjectFromEvent(e, payload)
    console.log(newData)
    updateTask(uuid, newData)
  }

  const handleTitleEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const res = getObjectFromEvent(e)
    setNewIDP({ ...newIDP, ...res })
  }

  async function receivingActiveEmployee() {
    dispatch(setIsRequestActiveEmployee(true))
    try {
      const employee = await getUserById(+params.user_id)
      dispatch(setActiveEmployee({ user: employee.data }))
      dispatch(setIsSuccessActiveEmployee(true))
    } catch (error) {
      dispatch(setIsFailedActiveEmployee(true))
      dispatch(setErrorMessageActiveEmployee(`Ошибка ${error.toJSON().status}`))
    } finally {
      dispatch(setIsRequestActiveEmployee(false))
    }
  }

  return (
    <div className={styles.container}>
      <ButtonBack path={routes.headStaff + '/' + params.user_id} />
      {isRequest && <LoaderCircle />}
      {isFailed && <ErrorPage text={errorMessage} />}
      {isSuccess && isDone && (
        <>
          <h1 className={styles.title}>ИПР успешно назначен</h1>
          <p className={styles.message}>
            Индивидуальный план развития отобразится у сотрудника во вкладке
            ИПР.
          </p>
          <ButtonAccent
            title="Вернуться на страницу сотрудника"
            type="button"
            path={routes.headStaff + '/' + params.user_id}
            extraClass={styles.returnButton}
          />
        </>
      )}
      {isSuccess && !isDone && (
        <>
          <h1 className={styles.title}>Назначить ИПР</h1>

          <form className={styles.form}>
            <InputTypeText
              name={'fullName'}
              value={[user.last_name, user.first_name, user.patronymic].join(
                ' ',
              )}
              label="ФИО"
              placeholder="ФИО"
              disabled
            />
            <div className={styles.row}>
              <InputTypeText
                name={'department'}
                value={user.department}
                label="Департамент"
                placeholder="Департамент"
                outerClass={styles.halfrow}
                disabled
              />
              <InputTypeText
                name={'position'}
                value={user.post}
                label="Должность"
                placeholder="Должность"
                outerClass={styles.halfrow}
                disabled
              />
            </div>
            <InputTypeText
              name={'idpTitle'}
              id={'idpTitle'}
              value={newIDP.idpTitle}
              onChange={handleTitleEvent}
              label="Название ИПР"
              placeholder="Название ИПР"
            />
          </form>

          <ul className={styles.tasks}>
            {newIDP.tasks.map((item, index, arr) => (
              <FormTask
                {...item}
                hasDelete={arr.length > 1}
                key={item.uuid}
                index={index}
                removTask={removTask}
                onChange={handleTaskEvent}
              />
            ))}
          </ul>
          <AddButton
            title="Добавить еще одну задачу"
            type="button"
            onClick={() => {
              addTask()
            }}
          />
          <ButtonAccent
            title="Назначить ИПР"
            type="button"
            onClick={() => setIsDone(true)}
            extraClass={styles.submitButton}
          />
        </>
      )}
    </div>
  )
}

export default HeadForm
