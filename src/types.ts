import { IconType } from 'primereact/utils'
import { MouseEventHandler } from 'react'

export interface MenuNavItemType {
  name: string
  Svg?: React.VFC<React.SVGProps<SVGSVGElement>>
  nav: string
  textColorGray?: boolean
  isMainMenu?: boolean
}

export interface MainGalleryItemType {
  name: string
  src: string
}

export interface routesType {
  main: string
  employee: string
  employeeIdp: string
  employeeIdpTasks: string
  employeeIdpForm: string
  employeeIdpFormDone: string
  employeeCompetencies: string
  head: string
  headStats: string
  headStaff: string
  headStaffId: string
  headStaffIdTasks: string
  headStaffIdForm: string
  headStaffIdFormDone: string
}

export type GradeType =
  | 'intern'
  | 'junior'
  | 'junior plus'
  | 'middle'
  | 'middle plus'
  | 'senior'
  | 'senior plus'
  | 'principal'
  | 'principal plus'

export type IdpStatuses = 'in_work' | 'done' | 'not_completed' | 'cancelled'

export enum IdpStatusesTranslate {
  in_work = 'В работе',
  cancelled = 'Отменен',
  not_completed = 'Не выполнен',
  done = 'Выполнен',
}

export type StatusColorsType =
  | 'all'
  | 'in_work'
  | 'missing'
  | 'cancelled'
  | 'not_completed'
  | 'done'

export interface StatusTypeList {
  text: string
  style: StatusColorsType
}

export interface TreeNodeMod {
  title?: string

  lvl?: number

  avatar?: string

  status?: StatusColorsType

  subtitle?: string
  /**
   * Unique identifier of the element.
   */
  id?: string | undefined
  /**
   * Unique key of the node.
   */
  key?: string | undefined
  /**
   * Label of the node.
   */
  label?: string | undefined
  /**
   * Data represented by the node.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any | undefined
  /**
   * Icon of the node to display next to content.
   */
  icon?: IconType<TreeNodeMod> | undefined
  /**
   * Used to get the child elements of the component.
   * @readonly
   */
  children?: TreeNodeMod[] | undefined
  /**
   * Inline style of the node.
   */
  style?: React.CSSProperties | undefined
  /**
   * Style class of the node.
   */
  className?: string | undefined
  /**
   * Whether the node is droppable when dragdrop is enabled.
   * @defaultValue true
   */
  droppable?: boolean | undefined
  /**
   * Whether the node is draggable when dragdrop is enabled.
   * @defaultValue true
   */
  draggable?: boolean | undefined
  /**
   * Whether the node is selectable when selection mode is enabled.
   */
  selectable?: boolean | undefined
  /**
   * Specifies if the node has children. Used in lazy loading.
   */
  leaf?: boolean | undefined
  /**
   * Visibility of node.
   */
  expanded?: boolean | undefined
}

export enum EnumUserStatuses {
  employee = 'Сотрудник',
  head = 'Руководитель',
  mentor = 'Ментор',
}

export interface userStatus {
  status: EnumUserStatuses
  path: string
  disabled?: boolean
}

export interface IdpType {
  id: string
  title: string
  head: string
  currentTask: string
  deadline: string
  status: IdpStatuses
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tasks: any[]
}

export interface DropDownMenuItemType {
  text: string
  isDisabled?: boolean
  isRed?: boolean
  onClick: MouseEventHandler<HTMLButtonElement>
}
