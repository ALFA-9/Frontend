import styles from './new-comment-form.module.scss';
import { FormEvent, FC } from 'react';
import { useForm } from '../../hooks/use-form';
import InputTypeText from '../../ui/inputs/input-type-text/input-type-text';
import SendButton from '../../ui/buttons/send-button/send-button';

interface INewCommentProps {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
}

const NewCommentForm: FC<INewCommentProps> = ({ onSubmit }) => {
  const { values, setValues, handleChange } = useForm({ comment: '' });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {}

  return (
    <form className={styles.form} onSubmit={onSubmit} name={'newComment'}>
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
  )
}

export default NewCommentForm;