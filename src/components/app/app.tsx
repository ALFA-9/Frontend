import styles from './app.module.scss'
import AppHeader from '../app-header/app-header'
import AppFooter from '../app-footer/app-footer'
import Sidebar from '../sidebar/sidebar'
import Content from '../content/content'
import { useLocation } from 'react-router-dom'
import InputTypeSelectSmall from '../../ui/inputs/input-type-select-small/input-type-select-small'
import { userStatuses } from '../../utils/const-user-statuses'

export default function App() {
  const location = useLocation()
  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <div
          className={`${styles.main__wrapper} ${
            location.pathname === '/' && styles.main_wrapper_main_gallery
          }`}>
          <InputTypeSelectSmall
            extraStyles={styles.input_small}
            data={userStatuses}
          />
          <Sidebar />
          <Content />
        </div>
      </main>
      <AppFooter />
    </>
  )
}
