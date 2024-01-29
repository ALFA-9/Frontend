import styles from './app-footer.module.scss';
import { FC } from 'react';
import Logo from '../../images/icons/logo.svg';
import Vk from '../../images/icons/vk.svg';
import Twitter from '../../images/icons/twitter.svg';

const AppFooter: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Logo className={styles.logo} />
        <div className={styles.phone}>
          <p className={styles.text}>Звонок по России бесплатный</p>
          <p className={styles.text}>+7 800 120-52-50</p>
        </div>
        <div className={styles.phoneMsk}>
          <p className={styles.text}>Телефон в Москве</p>
          <p className={styles.text}>+7 495 456-24-21</p>
        </div>
        <div className={styles.email}>
          <p className={styles.text}>Email</p>
          <p className={styles.text}>alfa@people.ru</p>
        </div>
        <div className={styles.address}>
          <p className={styles.text}>Главный офис</p>
          <address className={styles.addressText}>
            {'185 134, Россия, г. Москва\nул. Машиностроителей, д. 31'}
          </address>
        </div>
        <div className={styles.schedule}>
          <p className={styles.text}>Рабочие дни</p>
          <p className={styles.text}>ПН-ПТ с 9.00 до 17.00</p>
        </div>
        <nav className={styles.menuLeft}>
          <ul className={styles.menu}>
            <li>
              <a href='#' className={styles.link}>IT-услуги</a>
            </li>
            <li>
              <a href='#' className={styles.link}>Страхование</a>
            </li>
            <li>
              <a href='#' className={styles.link}>Банковские услуги</a>
            </li>
            <li>
              <a href='#' className={styles.link}>Бенефиты</a>
            </li>
            <li>
              <a href='#' className={styles.link}>Путешествия</a>
            </li>
          </ul>
        </nav>
        <nav className={styles.menuRight}>
          <ul className={styles.menu}>
            <li>
              <a href='#' className={styles.link}>Новости</a>
            </li>
            <li>
              <a href='#' className={styles.link}>О компании</a>
            </li>
            <li>
              <a href='#' className={styles.link}>Поддержка</a>
            </li>
            <li>
              <a href='#' className={styles.link}>Вакансии</a>
            </li>
            <li>
              <a href='#' className={styles.link}>Контакты</a>
            </li>
          </ul>
        </nav>
        <ul className={styles.socials}>
          <li>
            <Vk className={styles.socialsIcon} />
          </li>
          <li>
            <Twitter className={styles.socialsIcon} />
          </li>
        </ul>
        <div className={styles.copyright}>
          <p className={styles.copyrightText}>&copy; 1994 – 2023 Общество с ограниченной ответственностью “Альфа Пипл”</p>
          <p className={styles.copyrightText}>Политика в области персональных данных</p>
        </div>
      </div>
    </footer>
  )
}

export default AppFooter;
