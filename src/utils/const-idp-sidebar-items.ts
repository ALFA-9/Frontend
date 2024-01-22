import { MenuNavItemType } from '../types'
import Idp from '../images/icons/sidebar-idp/IPR.svg'
import Competencies from '../images/icons/sidebar-idp/skills.svg'
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
