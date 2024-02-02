import styles from './idp-task.module.scss';
import { useState, FormEvent, FC, MouseEventHandler } from 'react';
import LabelsWithDot from '../../ui/lables/labels-with-dot/labels-with-dot';
import LablesSmall from '../../ui/lables/lables-small/lables-small';
import InputTypeCheckbox from '../../ui/inputs/input-type-checkbox/input-type-checkbox';
import { LablesSmallEnum } from '../../ui/lables/types';
import { DropDownMenuItemType } from '../../types';
import DropDownMenu from '../../ui/drop-down-menu/drop-down-menu';
import Comment from '../comment/comment';
import Divider from '../divider/divider';
import NewCommentForm from '../new-comment/new-comment-form';
import Dots from '../../images/icons/three_dots.svg';

const commentData = {
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1024px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg',
  employee: 'Базаров Василий Иванович',
  employeePost: 'Линейный руководитель 1',
  pubDate: '29.01.24 11:47',
  body: 'Неплохой промежуточный результат, но есть над чем ещё поработать. В дальнейшем рекомендую больше внимания уделять вопросу защиты от несанкционированного доступа.'
}

interface IIdpTaskProps {
  data: {
    name: string,
    dateStart: string,
    dateEnd: string,
    statusProgress: string,
    statusAccept: boolean,
    type: string,
    control: string,
    description: string
  },
  isHead?: boolean
}

const IdpTask: FC<IIdpTaskProps> = ({ data, isHead }) => {
  //
  const { name, dateStart, dateEnd, statusProgress, statusAccept, type, control, description } = data;
  const commentsCount = 4;
  const hasComments = !!commentsCount;
  //
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  const setDividerTitle = (count: number) =>
    isHidden ? `Показать еще ${count - 1}` : `Свернуть`;

  const clickReset = () => {
    setIsOptionsOpen(false);
    document.body.removeEventListener('click', clickReset);
  }

  const openOptionsList: MouseEventHandler<HTMLButtonElement> = event => {
    event.preventDefault();
    event.stopPropagation();
    if (isOptionsOpen) {
      setIsOptionsOpen(false);
      document.body.removeEventListener('click', clickReset);
      return;
    }
    setIsOptionsOpen(true);
    document.body.addEventListener('click', clickReset);
  }

  const handleClick = () => {
    setIsHidden(!isHidden);
    console.log('isHidden: ', isHidden)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  const handleTestClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    console.log('click')
  }

  const dropDownList: DropDownMenuItemType[] = [
    {
      onClick: handleTestClick,
      text: 'Принять',
      isDisabled: true,
      isRed: false
    },
    {
      onClick: handleTestClick,
      text: 'Вернуть на доработку',
      isDisabled: true,
      isRed: false
    },
    {
      onClick: handleTestClick,
      text: 'Отменить',
      isDisabled: true,
      isRed: true
    }
  ]

  return (
    <li>
      <article className={styles.task}>
        <h2 className={styles.title}>
          {name}
        </h2>
        <div className={styles.statusbar}>
          <span className={styles.dates}>{dateStart}–{dateEnd}</span>
          <LabelsWithDot color='green' title='Выполнен'/>
          {
            !isHead && (
              <InputTypeCheckbox
                label='Отметить задачу выполненной'
                labelClass={styles.checkbox}
              />
            )
          }
        </div>
        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.header}>
              <div className={`${styles.row} ${styles.type}`}>
                <span className={styles.term}>Тип задачи</span>
                <LablesSmall text={type} color={LablesSmallEnum.purple} />
              </div>
              <div className={`${styles.row} ${styles.control}`}>
                <span className={styles.term}>Метод приёмки</span>
                <LablesSmall text={control} color={LablesSmallEnum.blue} />
              </div>
              {
                isHead && (
                <div className={styles.dotsMenu}>
                  <button className={styles.dotsButton} type='button' onClick={openOptionsList}>
                    <Dots className={styles.dotsIcon} />
                  </button>
                  <DropDownMenu isOpen={isOptionsOpen} items={dropDownList} />
                </div>
                )
              }
            </div>
            <p className={styles.description}>
              {description}
            </p>
          </div>
          <div className={styles.discussion}>
            <h3 className={styles.commentsTitle}>Комментарии</h3>
            {hasComments
              ? (
                <>
                <ul className={styles.comments}>
                  {[...Array(commentsCount)].map((item, index) =>
                    <Comment
                      data={commentData}
                      isHidden={index === 0 ? false : isHidden}
                      key={`comment${index}`}
                    />
                  )}
                </ul>
                {(commentsCount > 1) &&
                  <Divider
                    title={setDividerTitle(commentsCount)}
                    onClick={handleClick}
                  />
                }
                </>
              )
              : (
                <p className={styles.message}>
                  Пока нет комментариев по заданной задаче
                </p>
              )
            }
            <NewCommentForm onSubmit={handleSubmit}/>
          </div>
        </div>
      </article>
    </li>
  )
}

export default IdpTask;