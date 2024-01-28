import  { FC } from 'react'
import styles from './main-screen-grid-cards.module.scss'
import { Link } from 'react-router-dom'
import Heart from '../../images/icons/main-card/heart.svg'
import Comments from '../../images/icons/main-card/message-square.svg'
import { MainGalleryItemType } from '../../types'

const MainScreenGridCardSmall: FC<MainGalleryItemType> = ({ name, src }) => {
  return (
    <article className={styles.container}>
      <Link to='#'>
        <img className={styles.img} src={src} alt={name} />
      </Link>
      <div className={styles.info_wrapper}>
        <p className={styles.text}>4 часа назад</p>
        <div className={styles.buttons_wrapper}>
          <button type='button' className={styles.button_like}>
            <Heart className={styles.svg} />
            <p className={styles.text}>44</p>
          </button>
          <button type='button' className={styles.button_comment}>
            <Comments className={styles.svg} />
          </button>
        </div>
      </div>

      <h3 className={styles.title}>{name}</h3>
    </article>
  )
}

export default MainScreenGridCardSmall
