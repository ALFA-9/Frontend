import { EnumUserStatuses } from '../types'
import { routes } from './const-routes'

export const userStatuses = [
  {
    status: EnumUserStatuses.employee,
    path: routes.employeeIdp,
  },
  {
    status: EnumUserStatuses.head,
    path: routes.headStats,
  },
  {
    status: EnumUserStatuses.mentor,
    path: '#',
    disabled: true,
  },
]
