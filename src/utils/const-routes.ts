import { routesType } from '../types'

export const routes: routesType = {
  main: '/',
  employee: '/employee',
  employeeIdp: '/employee/idp',
  employeeIdpTasks: '/employee/idp/tasks',
  employeeIdpForm: '/employee/idp/form',
  employeeIdpFormDone: '/employee/idp/form/done',
  employeeCompetencies: '/employee/competencies',
  head: '/head',
  headStats: '/head/stats',
  headEmployees: '/head/employees',
  headEmployeesId: '/head/employees/:id',
  headEmployeesIdTasks: '/head/employees/:id/tasks',
  headEmployeesIdForm: '/head/employees/:id/form',
  headEmployeesIdFormDone: '/head/employees/:id/form/done',
}
