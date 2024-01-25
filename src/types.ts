import { TreeNode } from 'primereact/treenode'
import { IconType } from 'primereact/utils'

export interface MenuNavItemType {
  name: string
  src?: string
  Svg?: React.VFC<React.SVGProps<SVGSVGElement>>
  nav: string
  textColorGray?: boolean
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
  headEmployees: string
  headEmployeesId: string
  headEmployeesIdTasks: string
  headEmployeesIdForm: string
  headEmployeesIdFormDone: string
}

export interface ScoreType {
  name: string
  score: number
}

export interface CompetenciesType {
  title: string
  scors: ScoreType[]
}

export interface TreeNodeMod {
  title?: string

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
