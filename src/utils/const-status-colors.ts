import { StatusTypeList } from '../types'

export const filterListItems: StatusTypeList[] = [
  {
    text: 'Все',
    style: 'all',
  },
  {
    text: 'В работе',
    style: 'in_progress',
  },
  {
    text: 'Выполнен',
    style: 'completed',
  },
  {
    text: 'Не выполнен',
    style: 'failed',
  },
  {
    text: 'Отменен',
    style: 'cancelled',
  },
  {
    text: 'Отсутствует',
    style: 'missing',
  },
]
