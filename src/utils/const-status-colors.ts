import { StatusType } from '../types'

export const filterListItems: StatusType[] = [
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
    style: 'not_completed',
  },
  {
    text: 'Отменен',
    style: 'canceled',
  },
  {
    text: 'Отсутствует',
    style: 'missing',
  },
]
