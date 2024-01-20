import styles from './layout.module.scss';
import { useEffect, FC } from 'react';
// import { useAppSelector, useAppDispatch } from '../../services/hooks';
import AppHeader from '../app-header/app-header';
import AppFooter from '../app-footer/app-footer';
import { Outlet } from 'react-router-dom';
import { UiPage } from '../../pages/ui-page/ui-page';

const Layout: FC = () => {
  return (
    <>
    <AppHeader />
    <main className={styles.main}>
      <UiPage />
      <Outlet />
    </main>
    <AppFooter />
    </>
  )
}

export default Layout;
