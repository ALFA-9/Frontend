import React, { FC } from 'react'
import styles from './main-screen-grid-cards.module.scss'
import mountains from '../../images/main-gallery/mountains_big.jpeg'
import { Link } from 'react-router-dom'
import Heart from '../../images/icons/main-card/heart.svg'
import Comments from '../../images/icons/main-card/message-square.svg'
import { MainGalleryItemType } from '../../types'

const MainScreenGridCardBig: FC<MainGalleryItemType> = ({ name, src }) => {
  return (
    <article className={styles.container_big}>
      <div className={styles.container_big_wrapper}>
        <Link to='#'>
          <img className={styles.img_big} src={src} alt={name} />
          <div className={styles.info_wrapper_big}>
            <p className={styles.text_big}>5 декабря 2023</p>
            <h3 className={styles.title_big}>{name}</h3>
            <div className={styles.buttons_wrapper}>
              <button type='button' className={styles.button_like}>
                <Heart className={styles.svg_big} />
                <p className={styles.text_big}>44</p>
              </button>
              <button type='button' className={styles.button_comment}>
                <Comments className={styles.svg_big} />
              </button>
            </div>
          </div>
        </Link>
      </div>
    </article>
  )
}

export default MainScreenGridCardBig
