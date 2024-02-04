import { Spinner } from '@alfalab/core-components-spinner'
import styles from './loader.module.scss'

const LoaderCircle = () => {
  return (
    <div className={styles.spinnerContainer}>
      <Spinner visible={true} size='m' />
    </div>
  )
}

export default LoaderCircle
