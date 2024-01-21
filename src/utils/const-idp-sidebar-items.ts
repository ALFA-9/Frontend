import { MenuNavItemType } from '../types'
import Idp from '../images/icons/sidebar-idp/IPR.svg'
import Competencies from '../images/icons/sidebar-idp/skills.svg'

export const idpSidebarItems: MenuNavItemType[] = [
  {
    name: 'ИПР',
    Svg: Idp,
    nav: '/idp/idp/in-progress',
  },
  {
    name: 'Компетенции',
    Svg: Competencies,
    nav: '/idp/competencies',
  },
]
