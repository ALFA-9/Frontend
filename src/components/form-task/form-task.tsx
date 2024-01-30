import styles from './form-task.module.scss';
import { FC } from 'react';
import InputTypeText from '../../ui/inputs/input-type-text/input-type-text';
import InputTypeSelect from '../../ui/inputs/input-type-select/input-type-select';
import InputTypeTextaria from '../../ui/inputs/input-type-textaria/input-type-textaria';
import InputTypeRadiobutton from '../../ui/inputs/input-type-radiobutton/input-type-radiobutton';
import InputTypeDate from '../../ui/inputs/input-type-date/input-type-date';
import { useForm } from '../../hooks/use-form';

interface IFormTaskProps {
  title: string
}

const FormTask: FC<IFormTaskProps> = ({title}) => {
  return (
    <li>
      <fieldset className={styles.task}>
        <p className={styles.title}>{title}</p>
        <InputTypeText
          label='Название'
          placeholder='Название'
        />
        <div className={styles.row}>
          <InputTypeSelect
            label='Тип'
            value='Самостоятельное обучение'
            outerClass={styles.halfrow}
          />
          <InputTypeSelect
            label='Метод приемки'
            value='Собеседование'
            outerClass={styles.halfrow}
          />
        </div>
        <div className={styles.textaria}>
          <p className={styles.legend}>Описание</p>
          <InputTypeTextaria
            id='textaria'
            name={'textaria'}
            value=''
            label='Описание'
            placeholder='Введите текст'
            maxlength={500}
          />
        </div>
        <fieldset className={styles.deadline}>
          <p className={styles.legend}>Срок выполнения</p>
          <div className={styles.radio}>
            <InputTypeRadiobutton
              name='daterange'
              value='3'
              id='rad1'
              label='3 месяца'
            />
            <InputTypeRadiobutton
              name='daterange'
              value='6'
              id='rad2'
              label='6 месяцев'
            />
            <InputTypeRadiobutton
              name='daterange'
              value='12'
              id='rad3'
              label='1 год'
            />
            <InputTypeRadiobutton
              name='daterange'
              value='other'
              id='rad4'
              label='Другое'
            />
          </div>
          <div className={styles.date}>
            <div className={styles.daterange}>
              <InputTypeDate
                value=''
                onChange={() => {}}
                placeholder='Выберете дату'
                id='date'
                name='date'
              />
            </div>
            <div className={styles.daterange}>
              <InputTypeDate
                value=''
                onChange={() => {}}
                placeholder='Выберете дату'
                id='date'
                name='date'
              />
            </div>
          </div>
        </fieldset>
      </fieldset>
    </li>
  )
}

export default FormTask;
