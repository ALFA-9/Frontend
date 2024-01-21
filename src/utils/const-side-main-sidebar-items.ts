import { MenuNavItemType } from '../types'

import actionPlan from '../images/icons/sidebar-main/action-plan.png'
import ask from '../images/icons/sidebar-main/ask.png'
import book from '../images/icons/sidebar-main/book.png'
import bookBlue from '../images/icons/sidebar-main/book_blue.png'
import candy from '../images/icons/sidebar-main/candy.png'
import drink from '../images/icons/sidebar-main/drink.png'
import healthCare from '../images/icons/sidebar-main/health-care.png'
import knowledge from '../images/icons/sidebar-main/knowledge.png'
import documents from '../images/icons/sidebar-main/upload.png'
import user from '../images/icons/sidebar-main/user.png'
import team from '../images/icons/sidebar-main/team.png'
import wallet from '../images/icons/sidebar-main/wallet.png'

import apps from '../images/icons/sidebar-main/apps.png'

export const mainSidebarMoreButton: MenuNavItemType = {
  name: 'ещё 23',
  src: apps,
  nav: '#',
}

export const mainSidebarItems: MenuNavItemType[] = [
  {
    name: 'Мой доход',
    src: wallet,
    nav: '#',
  },
  {
    name: 'Мои заявки',
    src: ask,
    nav: '#',
  },
  {
    name: 'Базы знаний',
    src: book,
    nav: '#',
  },
  {
    name: 'Мое обучение',
    src: bookBlue,
    nav: '#',
  },
  {
    name: 'Индивидуальный план развития',
    src: actionPlan,
    nav: '/idp/idp/in-progress',
  },
  {
    name: 'Бенефиты',
    src: candy,
    nav: '#',
  },
  {
    name: 'Отпуск',
    src: drink,
    nav: '#',
  },
  {
    name: 'Больничные и пособия',
    src: healthCare,
    nav: '#',
  },
  {
    name: 'IT-услуги',
    src: knowledge,
    nav: '#',
  },
  {
    name: 'Документы на подпись',
    src: documents,
    nav: '#',
  },
  {
    name: 'Личные данные',
    src: user,
    nav: '#',
  },
  {
    name: 'Моя команда',
    src: team,
    nav: '#',
  },
  {
    name: 'ещё 23',
    src: apps,
    nav: '#',
    colorGray: true,
  },
]
