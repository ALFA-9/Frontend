import { UserType } from '../api/api-types'

export const defaultUser: UserType = {
  id: 0,
  department: 'default',
  email: 'example@mail.ru',
  first_name: 'John',
  last_name: 'Doe',
  patronymic: '007',
  grade: 'intern',
  post: 'Директор',
  image: '#',
  idps: [],
  is_director: false,
  hard_skills: {
    ['Аналитическое мышление']: 0,
    ['Высшая математика']: 0,
    ['Инфраструктура разработкие']: 0,
    ['Структуры данных и алгоритмы']: 0,
    average: 0,
  },
  soft_skills: {
    ['Аналитическое мышление']: 0,
    ['Личная эффективность']: 0,
    ['Работа в коллективе']: 0,
    ['Коммуникабельность']: 0,
    ['Наставничество']: 0,
    average: 0,
  },
}
