import { routesType } from '../types'

export const routes: routesType = {
  main: '/',
  employee: '/employee',
  employeeIdp: '/employee/idp',
  employeeIdpTasks: '/employee/idp/:idp/tasks',
  employeeIdpForm: '/employee/idp/form',
  employeeIdpFormDone: '/employee/idp/form/done',
  employeeCompetencies: '/employee/competencies',
  head: '/head',
  headStats: '/head/stats',
  headEmployees: '/head/staff',
  headEmployeesId: '/head/staff/:id',
  headEmployeesIdTasks: '/head/staff/:id/:idp/tasks',
  headEmployeesIdForm: '/head/staff/:id/form',
  headEmployeesIdFormDone: '/head/staff/:id/form/done',
}
