//API TYPES
export interface UserType {
  id: number
  first_name: string
  last_name: string
  patronymic: string
  email: string
  phone?: string
  grade: number
  post: number
  department: number
  is_staff?: false
  subordinates?: UserType[]
}

export interface CommentType {
  employee: string
  employee_post: string
  body: string
  pub_date: string
}

export interface TaskType {
  id: number
  name: string
  description: string
  idp: number
  type: string
  status_progress: 'in_work' | 'done' | ' not_completed'
  status_accept: 'accepted' | 'not_accepted' | 'canceled'
  control: string
  date_start: string
  date_end: string
  comments?: CommentType[]
}

export interface IdpByIdType {
  title: string
  employee: number
  director: number
  status_idp: 'in_work' | 'done' | 'not_completed' | ' canceled'
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
  Other = 1,
  WorkplaceTask,
  LearningFromTheExperiencesOfOthers,
  SelfpacedLearning,
  Project,
}

export enum EnumTaskControlTypes {
  Testing = 1,
  Interview,
  PracticalTask,
  Presentation,
  Performance,
  Other,
}

export interface PostNewIdpTask {
  name: string
  description: string
  date_start: string
  date_end: string
  type: EnumTaskTypeTypes
  control: EnumTaskControlTypes
}

export interface PostNewIdp {
  title: string
  employee: number
  director: number
  tasks: PostNewIdpTask[]
}


