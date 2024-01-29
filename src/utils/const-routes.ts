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
  headStaff: '/head/staff',
  headStaffId: '/head/staff/:user_id',
  headStaffIdTasks: '/head/staff/:user_id/:idp/tasks',
  headStaffIdForm: '/head/staff/:user_id/form',
  headStaffIdFormDone: '/head/staff/:user_id/form/done',
}
