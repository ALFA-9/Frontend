import { FC } from 'react'
import styles from './content.module.scss'
import { Outlet, Route, Routes, useLocation } from 'react-router-dom'
import MainGallery from '../../pages/main-gallery/main-gallery'
import Idp from '../../pages/idp/idp'
import competenciesImg from '../../images/_temp/competencies.jpg'
import { UiPage } from '../../pages/ui-page/ui-page'
const Content: FC = () => {
  const location = useLocation()

  return (
    <section
      className={`${styles.content} ${
        location.pathname === '/' && styles.content_main_gallery
      }`}>
      <Routes>
        <Route path='/' element={<MainGallery />} />
        <Route path='/idp/idp' element={<Idp />} />
        <Route path='/idp/ui' element={<UiPage />} />
        <Route
          path='/idp/competencies'
          element={<img src={competenciesImg} alt='#' />}
        />
      </Routes>
    </section>
  )
}
UiPage
export default Content
