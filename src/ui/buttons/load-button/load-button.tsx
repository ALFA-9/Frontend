import styles from './load-button.module.scss';
import { useRef, ButtonHTMLAttributes, FC, ChangeEvent } from 'react';
import PaperClip from './paper-clip.svg';

interface ILoadButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string,
  accept?: string,
  extraClass?: string
}

const LoadButton: FC<ILoadButtonProps> = ({
  title = '',
  accept = '',
  extraClass = '',
  ...InputHTMLAttributes
}) => {

  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.click();
  }

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    console.log('fileObj is', fileObj);

    // reset file input
    event.target.value = null;

    // is now empty
    console.log(event.target.files);

    // can still access file object here
    console.log(fileObj);
    console.log(fileObj.name);
  }

  return (
    <>
    <input
      style={{display: 'none'}}
      ref={inputRef}
      type='file'
      accept={accept}
      onChange={handleFileChange}
    />
    <button
      onClick={handleClick}
      className={`${styles.button} ${extraClass}`}
      {...InputHTMLAttributes}
    >
      <PaperClip className={styles.icon} />
      <p className={styles.title}>{title}</p>
    </button>
    </>
  )
}

export default LoadButton;
