import { MenuNavItemType } from '../types'

import ActionPlan from '../images/icons/sidebar-main/action-plan.svg'
import Ask from '../images/icons/sidebar-main/ask.svg'
import Book from '../images/icons/sidebar-main/book.svg'
import BookBlue from '../images/icons/sidebar-main/book_blue.svg'
import Candy from '../images/icons/sidebar-main/candy.svg'
import Drink from '../images/icons/sidebar-main/drink.svg'
import HealthCare from '../images/icons/sidebar-main/health-care.svg'
import Knowledge from '../images/icons/sidebar-main/knowledge.svg'
import Documents from '../images/icons/sidebar-main/upload.svg'
import User from '../images/icons/sidebar-main/user.svg'
import Team from '../images/icons/sidebar-main/team.svg'
import Wallet from '../images/icons/sidebar-main/wallet.svg'
import Apps from '../images/icons/sidebar-main/apps.svg'

import { routes } from './const-routes'

export const mainSidebarMoreButton: MenuNavItemType = {
  name: 'ещё 23',
  Svg: Apps,
  nav: '#',
  isMainMenu: true,
}

export const mainSidebarItems: MenuNavItemType[] = [
  {
    name: 'Мой доход',
    Svg: Wallet,
    nav: '#',
    isMainMenu: true,
  },
  {
    name: 'Отпуск',
    Svg: Drink,
    nav: '#',
    isMainMenu: true,
  },
  {
    name: 'Мое обучение',
    Svg: BookBlue,
    nav: '#',
    isMainMenu: true,
  },
  {
    name: 'Личные данные',
    Svg: User,
    nav: '#',
    isMainMenu: true,
  },
  {
    name: 'Индивидуальный план развития',
    Svg: ActionPlan,
    nav: routes.employeeIdp,
    isMainMenu: true,
  },
  {
    name: 'Базы знаний',
    Svg: Book,
    nav: '#',
    isMainMenu: true,
  },
  {
    name: 'Мои заявки',
    Svg: Ask,
    nav: '#',
    isMainMenu: true,
  },
  {
    name: 'Документы на подпись',
    Svg: Documents,
    nav: '#',
    isMainMenu: true,
  },
  {
    name: 'Больничные и пособия',
    Svg: HealthCare,
    nav: '#',
    isMainMenu: true,
  },
  {
    name: 'Заказ справок и документов',
    Svg: Ask,
    nav: '#',
    isMainMenu: true,
  },
  {
    name: 'IT-услуги',
    Svg: Knowledge,
    nav: '#',
    isMainMenu: true,
  },
  {
    name: 'Моя команда',
    Svg: Team,
    nav: '#',
    isMainMenu: true,
  },
  {
    name: 'Бенефиты',
    Svg: Candy,
    nav: '#',
    isMainMenu: true,
  },
  {
    name: 'ещё 23',
    Svg: Apps,
    nav: '#',
    textColorGray: true,
    isMainMenu: true,
  }
]
