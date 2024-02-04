import styles from './idp-task.module.scss';
import { useState, FormEvent, FC, MouseEventHandler } from 'react';
import { postComment } from '../../api/api';
import { useAppDispatch } from '../../redux/hooks';
import { fetchIdpDataById } from '../../redux/slices/idp-tasks';
import { useForm } from '../../hooks/use-form';
import { TaskType, CommentType } from '../../api/api-types';
import { LablesSmallEnum } from '../../ui/lables/types';
import { DropDownMenuItemType } from '../../types';
import LabelsWithDot from '../../ui/lables/labels-with-dot/labels-with-dot';
import LablesSmall from '../../ui/lables/lables-small/lables-small';
import InputTypeCheckbox from '../../ui/inputs/input-type-checkbox/input-type-checkbox';
import DropDownMenu from '../../ui/drop-down-menu/drop-down-menu';
import Comment from '../comment/comment';
import Divider from '../divider/divider';
import InputTypeText from '../../ui/inputs/input-type-text/input-type-text';
import SendButton from '../../ui/buttons/send-button/send-button';
import Dots from '../../images/icons/three_dots.svg';
// import NewCommentForm from '../new-comment/new-comment-form';

interface IIdpTaskProps {
  data: TaskType,
  isHead?: boolean
}

const IdpTask: FC<IIdpTaskProps> = ({ data, isHead }) => {
  const { id, idp, name, date_start, date_end, status_progress, type, control, description, comments } = data;
  const commentsCount = comments.length;
  const hasComments = !!commentsCount;

  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  const dispatch = useAppDispatch();

  const { values, setValues, handleChange } = useForm({ comment: '' });

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
    postComment({task_id: id, comment: values.comment});
    dispatch(fetchIdpDataById({idp: idp}));
    setValues({ comment: '' });
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
          <span className={styles.dates}>{date_start}–{date_end}</span>
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
                  {comments.map((comment, index) =>
                    <Comment
                      data={comment}
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
            <form className={styles.form} onSubmit={handleSubmit}>
              <InputTypeText
                name={'comment'}
                value={values.comment}
                onChange={handleChange}
                label='Комментарий'
                placeholder='Напишите комментарий'
                extraClass={styles.input}
                outerClass={styles.inputContainer}
              />
              <SendButton type='submit' />
            </form>
          </div>
        </div>
      </article>
    </li>
  )
}

export default IdpTask;