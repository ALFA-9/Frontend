import { GradeType, IdpStatuses } from '../types'

//API TYPES
export interface HardSkills {
  ['Структуры данных и алгоритмы']: number
  ['Инфраструктура разработкие']: number
  ['Аналитическое мышление']: number
  ['Высшая математика']: number
  average: number
}

export interface SoftSkills {
  ['Наставничество']: number
  ['Работа в коллективе']: number
  ['Коммуникабельность']: number
  ['Аналитическое мышление']: number
  ['Личная эффективность']: number
  average: number
}

export interface UserTypeIdpCurrentTask {
  id: number
  name: string
  date_end: string
}

export interface UserTypeIdp {
  id: number
  title: string
  progress: number
  director: string
  status_idp: IdpStatuses
  current_task: null | UserTypeIdpCurrentTask
}

export interface SubordinatesType {
  id: number
  image: string
  director: number
  first_name: string
  last_name: string
  patronymic: string
  post: string
  status_idp: IdpStatuses
  subordinates: SubordinatesType[]
}

export interface UserType {
  id: number
  is_director: boolean
  first_name: string
  last_name: string
  patronymic: string
  email: string
  grade: GradeType
  post: string
  department: string
  image: string
  hard_skills: HardSkills
  soft_skills: SoftSkills
  idps: UserTypeIdp[]
}

export interface EmployeeType {
  director: number;
  first_name: string;
  id: number;
  label?:string;
  avatar?: string;
  last_name: string;
  patronymic: string;
  post: string;
  status_idp: string;
}

export interface CommentType {
  employee: string;
  employee_image: string;
  employee_post: string;
  body: string;
  pub_date: string;
}

export interface TaskType {
  id: number
  name: string
  description: string
  idp: number
  type: string
  status_progress: IdpStatuses
  status_accept: 'accepted' | 'not_accepted'
  control: string
  date_start: string
  date_end: string
  comments?: CommentType[]
}

export interface IdpByIdType {
  title: string
  employee: number
  director: number
  status_idp: IdpStatuses
  tasks: TaskType[]
}

export interface StatisticType {
  in_work: number
  canceled: number
  done: number
  not_completed: number
  null: number
}

export enum EnumTaskTypeTypes {
  ['Проект'] = 1,
  ['Задание на рабочем месте'],
  ['Обучение самостоятельное'],
  ['Обучение на опыте других'],
  ['Другое'],
}

export enum EnumTaskControlTypes {
  ['Тестирование'] = 1,
  ['Собеседование'],
  ['Практическая задача'],
  ['Презентация'],
  ['Выступление'],
  ['Другое'],
}

export interface PostNewIdpTask {
  name: string;
  description: string;
  date_start: string;
  date_end: string;
  type: EnumTaskTypeTypes;
  control: EnumTaskControlTypes;
}

export interface PostNewIdp {
  title: string;
  employee: number;
  director: number;
  tasks: PostNewIdpTask[];
}
