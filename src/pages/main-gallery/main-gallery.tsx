import  { FC } from 'react'
import styles from './main-gallery.module.scss'
import MainScreenGridCardBig from '../../components/main-screen-grid-cards/main-screen-grid-card-big'
import MainScreenGridCardSmall from '../../components/main-screen-grid-cards/main-screen-grid-card-small'
import {
  mainGalleryBigItem,
  mainGalleryItems,
} from '../../utils/const-main-gallery-items'
import MainScreenMenuButton from '../../components/main-screen-menu-button/main-screen-menu-button'

const MainGallery: FC = () => {
  return (
    <>
      <div className={styles.header_wrapper}>
        <h1 className={styles.title}>Лента</h1>
        <nav className={styles.links_container}>
          <MainScreenMenuButton text='Новости' isBlack={true} />
          <MainScreenMenuButton text='События' />
          <MainScreenMenuButton text='Моменты' />
        </nav>
      </div>
      <div className={styles.grid}>
        <MainScreenGridCardBig
          name={mainGalleryBigItem.name}
          src={mainGalleryBigItem.src}
        />
        {mainGalleryItems.map((item, i) => (
          <MainScreenGridCardSmall name={item.name} src={item.src} key={i} />
        ))}
      </div>
    </>
  )
}

export default MainGallery
