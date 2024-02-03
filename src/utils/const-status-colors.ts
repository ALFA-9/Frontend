import { StatusTypeList } from '../types'

export const filterListItems: StatusTypeList[] = [
  {
    text: 'Все',
    style: 'all',
  },
  {
    text: 'В работе',
    style: 'in_work',
  },
  {
    text: 'Выполнен',
    style: 'done',
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
