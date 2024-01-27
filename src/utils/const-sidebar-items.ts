import { MenuNavItemType } from '../types'
import Idp from '../images/icons/sidebar-idp/IPR.svg'
import Competencies from '../images/icons/sidebar-idp/skills.svg'

import Employees from '../images/icons/sidebar-head/employees.svg'
import Statistics from '../images/icons/sidebar-head/statistics.svg'
import { routes } from './const-routes'

export const idpSidebarItems: MenuNavItemType[] = [
  {
    name: 'ИПР',
    Svg: Idp,
    nav: routes.employeeIdp,
  },
  {
    name: 'Компетенции',
    Svg: Competencies,
    nav: routes.employeeCompetencies,
  },
  {
    name: 'Тестирование UI',
    Svg: Competencies,
    nav: '/idp/ui',
  },
]

export const headSidebarItems: MenuNavItemType[] = [
  {
    name: 'Статистика',
    Svg: Statistics,
    nav: routes.headStats,
  },
  {
    name: 'Мои сотрудники',
    Svg: Employees,
    nav: routes.headEmployees,
  },
]
