import styles from './load-button.module.scss'
import { useRef, ButtonHTMLAttributes, FC, ChangeEvent } from 'react'
import PaperClip from './paper-clip.svg'

interface ILoadButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  accept?: string
  extraClass?: string
}

const LoadButton: FC<ILoadButtonProps> = ({
  title = '',
  accept = '',
  extraClass = '',
  ...InputHTMLAttributes
}) => {
  const inputRef = useRef(null)

  const handleClick = () => {
    inputRef.current.click()
  }

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileObj = event.target.files && event.target.files[0]
    if (!fileObj) {
      return
    }
    event.target.value = null
  }

  return (
    <>
      <input
        style={{ display: 'none' }}
        ref={inputRef}
        type='file'
        accept={accept}
        onChange={handleFileChange}
      />
      <button
        onClick={handleClick}
        className={`${styles.button} ${extraClass}`}
        {...InputHTMLAttributes}>
        <PaperClip className={styles.icon} />
        <p className={styles.title}>{title}</p>
      </button>
    </>
  )
}

export default LoadButton
