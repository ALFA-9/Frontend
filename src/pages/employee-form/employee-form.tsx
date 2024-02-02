import styles from './employee-form.module.scss'
import { FC, FormEvent, useState, useEffect } from 'react'
import InputTypeText from '../../ui/inputs/input-type-text/input-type-text'
import InputTypeSelect from '../../ui/inputs/input-type-select/input-type-select'
import InputTypeTextaria from '../../ui/inputs/input-type-textaria/input-type-textaria'
import LoadButton from '../../ui/buttons/load-button/load-button'
import ButtonAccent from '../../ui/buttons/button-accent/button-accent'
import { useForm } from '../../hooks/use-form'
import { routes } from '../../utils/const-routes'
import ButtonBack from '../../ui/buttons/button-back/button-back'

type TUser = {
  fullName: string
  department: string
  position: string
  supervisor: string[]
}

const EmployeeForm: FC = () => {
  const user: TUser = {
    fullName: 'Габдрахманов Александр Александрович',
    department: 'Отдел рекламы',
    position: 'Backend-разработчик',
    supervisor: [
      'Александров Александр Александрович',
      'Борисов Борис Борисович',
      'Васильев Василий Васильевич',
    ],
  }

  const size = user.supervisor.length

  const { values, setValues, handleChange } = useForm({
    fullName: '',
    department: '',
    position: '',
    supervisor: '',
    textaria: '',
  })

  const autofill = (user: TUser) => {
    if (
      user &&
      user.fullName &&
      user.department &&
      user.position &&
      user.supervisor.length
    )
      setValues({
        fullName: user.fullName,
        department: user.department,
        position: user.position,
        supervisor: user.supervisor[0],
        textaria: '',
      })
  }

  useEffect(() => {
    if (user) autofill(user)
  }, [])

  const [isDone, setIsDone] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsDone(true)
  }

  return (
    <div className={styles.container}>
      <ButtonBack path={routes.employeeIdp} />
      <h1 className={styles.title}>Заявка на ИПР</h1>
      {isDone && (
        <>
          <div className={styles.messages}>
            <p className={styles.message}>
              Запрос на ИПР отправлен руководителю — Александрову А.А.
            </p>
            <p className={styles.message}>
              Ответ придет на корпоративную почту.
            </p>
          </div>
          <ButtonAccent
            title='Вернуться на страницу ИПР'
            type='button'
            path={routes.employeeIdp}
            extraClass={styles.returnButton}
          />
        </>
      )}
      {!isDone && (
        <form onSubmit={handleSubmit} className={styles.form}>
          <InputTypeText
            name={'fullName'}
            value={values.fullName}
            onChange={handleChange}
            label='ФИО'
            placeholder='ФИО'
            disabled
          />
          <div className={styles.row}>
            <InputTypeText
              name={'department'}
              value={values.department}
              onChange={handleChange}
              label='Департамент'
              placeholder='Департамент'
              outerClass={styles.halfrow}
              disabled
            />
            <InputTypeText
              name={'position'}
              value={values.position}
              onChange={handleChange}
              label='Должность'
              placeholder='Должность'
              outerClass={styles.halfrow}
              disabled
            />
          </div>
          <InputTypeSelect
            name={'supervisor'}
            value={values.supervisor}
            onChange={handleChange}
            label='Руководитель'
            size={size}>
            {user.supervisor.map((item, index) => (
              <option key={`option${index}`}>{item}</option>
            ))}
          </InputTypeSelect>
          <div className={styles.textaria}>
            <p className={styles.legend}>Сопроводительное письмо</p>
            <InputTypeTextaria
              name={'textaria'}
              value={values.textaria}
              onInput={handleChange}
              label='Сопроводительное письмо'
              placeholder='Введите текст или загрузите письмо'
            />
          </div>
          <div className={styles.load}>
            <LoadButton
              title='Выберите файл'
              type='button'
              accept='.doc,.docx'
              extraClass={styles.loadButton}
            />
            <span className={styles.hint}>Форматы .doc, .docx</span>
          </div>
          <ButtonAccent
            title='Отправить'
            type='submit'
            extraClass={styles.submitButton}
          />
        </form>
      )}
    </div>
  )
}

export default EmployeeForm
