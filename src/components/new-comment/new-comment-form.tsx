import styles from './new-comment-form.module.scss';
import { FormEvent, FC } from 'react';
import InputTypeText from '../../ui/inputs/input-type-text/input-type-text';
import SendButton from '../../ui/buttons/send-button/send-button';

interface INewCommentProps {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
}

const NewCommentForm: FC<INewCommentProps> = ({ onSubmit }) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <InputTypeText
        label='Комментарий'
        placeholder='Напишите комментарий'
        extraClass={styles.input}
        outerClass={styles.inputContainer}
      />
      <SendButton type='submit' />
    </form>
  )
}

export default NewCommentForm;