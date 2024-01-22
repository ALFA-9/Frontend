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
