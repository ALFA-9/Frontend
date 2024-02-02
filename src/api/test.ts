import axios, { AxiosResponse } from 'axios'

const BASE_URL = 'https://api.new.red-hand.ru/api/'

interface TokenType {
  token: string
}

interface UserType {
  id: number
  first_name: string
  last_name: string
  patronymic: string
  email: string
  phone: string
  grade: number
  post: number
  department: number
  is_staff: false
  subordinates?: UserType[]
}

interface CommentType {
  employee: string
  employee_post: string
  body: string
  pub_date: string
}

interface TaskType {
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

interface IdpType {
  title: 'string'
  employee: number
  director: number
  status_idp: 'in_work' | 'done' | 'not_completed' | ' canceled'
  tasks: TaskType[]
}

export const getToken = (): Promise<AxiosResponse<TokenType>> => {
  return axios({
    method: 'POST',
    url: `${BASE_URL}auth/`,
    data: { email: 'zoduvon-ofe57@alfabank.ru' },
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

const instance = axios.create({
  baseURL: 'https://api.new.red-hand.ru/api',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Token ${localStorage.getItem('token')}`,
  },
})

export const getUserMe = (): Promise<AxiosResponse<UserType>> => {
  return instance({
    method: 'GET',
    url: `employees/me/`,
  })
}

export const getUserById = (
  user_id: number
): Promise<AxiosResponse<UserType>> => {
  return instance({
    method: 'GET',
    url: `employees/${user_id}/`,
  })
}

export const getSubordinates = (): Promise<AxiosResponse<UserType>> => {
  return instance({
    method: 'GET',
    url: `employees/get_subordinates`,
  })
}
interface getIdpDataById {
  idp: number
}

export const getIdpDataById = ({
  idp,
}: getIdpDataById): Promise<AxiosResponse<TokenType>> => {
  return instance({
    method: 'GET',
    url: `idps/${idp}/`,
  })
}

enum EnumTaskTypeTypes {
  Other = 1,
  WorkplaceTask,
  LearningFromTheExperiencesOfOthers,
  SelfpacedLearning,
  Project,
}

enum EnumTaskControlTypes {
  Testing = 1,
  Interview,
  PracticalTask,
  Presentation,
  Performance,
  Other,
}

interface postNewIdpTask {
  name: string
  description: string
  date_start: string
  date_end: string
  type: EnumTaskTypeTypes
  control: EnumTaskControlTypes
}

interface postNewIdp {
  title: string
  employee: number
  director: number
  tasks: postNewIdpTask[]
}

export const postNewIdp = ({
  director,
  employee,
  tasks,
  title,
}: postNewIdp): Promise<AxiosResponse<IdpType>> => {
  return instance({
    method: 'POST',
    url: `idps/`,
    data: {
      director,
      employee,
      tasks,
      title,
    },
  })
}

interface postIdpRequestByEmployeeType {
  title: string
  letter?: string
  director_id: number
  file?: string
}

export const postIdpRequestByEmployee = ({
  director_id,
  file,
  letter,
  title,
}: postIdpRequestByEmployeeType): Promise<
  AxiosResponse<postIdpRequestByEmployeeType>
> => {
  return instance({
    method: 'POST',
    url: `request/`,
    data: {
      director_id,
      file,
      letter,
      title,
    },
  })
}

interface StatisticType {
  in_work: number
  canceled: number
  done: number
  not_completed: number
  null: number
}

export const getStatistic = (): Promise<AxiosResponse<StatisticType>> => {
  return instance({
    method: 'GET',
    url: `statistic/`,
  })
}

interface PatchTaskType {
  data: TaskType
}

export const patchTask = ({
  data,
}: PatchTaskType): Promise<AxiosResponse<TaskType>> => {
  const { id, ...rest } = data
  return instance({
    method: 'PATCH',
    url: `tasks/${data.id}/`,
    data: {
      ...rest,
    },
  })
}

interface postComment {
  task_id: number
  comment: string
}

export const postComment = ({
  task_id,
  comment,
}: postComment): Promise<AxiosResponse<CommentType>> => {
  return instance({
    method: 'POST',
    url: `tasks/${task_id}/comments/`,
    data: {
      body: comment,
    },
  })
}
