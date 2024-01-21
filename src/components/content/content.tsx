import { FC } from 'react'
import styles from './content.module.scss'
import { Outlet, Route, Routes, useLocation } from 'react-router-dom'
import MainGallery from '../../pages/main-gallery/main-gallery'
import inProgress from '../../images/_temp/in-progress.jpg'
import idpImg from '../../images/_temp/idp.jpg'
import competenciesImg from '../../images/_temp/competencies.jpg'
import completeImg from '../../images/_temp/complete.jpg'
const Content: FC = () => {
  const location = useLocation()

  return (
    <section
      className={`${styles.content} ${
        location.pathname === '/' && styles.content_main_gallery
      }`}>
      <Routes>
        <Route path='/' element={<MainGallery />} />
        <Route
          path='/idp/idp'
          element={
            <div>
              <img src={idpImg} alt='#' />
              <Outlet />
            </div>
          }>
          <Route
            path='/idp/idp/in-progress'
            element={<img src={inProgress} alt='#' />}
          />
          <Route
            path='/idp/idp/complete'
            element={<img src={completeImg} alt='#' />}
          />
        </Route>
        <Route />
        <Route
          path='/idp/competencies'
          element={<img src={competenciesImg} alt='#' />}
        />
      </Routes>
    </section>
  )
}

export default Content
