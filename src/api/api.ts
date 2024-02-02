import axios, { AxiosResponse } from 'axios'
import {
  CommentType,
  IdpByIdType,
  StatisticType,
  TaskType,
  UserType,
  PostNewIdp,
} from './api-types'

const BASE_URL = 'https://api.new.red-hand.ru/api/'

interface TokenType {
  token: string
}

//Получить токен
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

//Получить данные активного юзера
export const getUserMe = (): Promise<AxiosResponse<UserType>> => {
  return instance({
    method: 'GET',
    url: `employees/me/`,
  })
}

//Получить данные юзера по ID
export const getUserById = (
  user_id: number
): Promise<AxiosResponse<UserType>> => {
  return instance({
    method: 'GET',
    url: `employees/${user_id}/`,
  })
}

//Получить подчиненных активного юзера с вложенностью
export const getSubordinates = (): Promise<AxiosResponse<UserType>> => {
  return instance({
    method: 'GET',
    url: `employees/get_subordinates`,
  })
}

interface getIdpDataById {
  idp: number
}

//Получить ИПР(его задания и комментарии) по ID
export const getIdpDataById = ({
  idp,
}: getIdpDataById): Promise<AxiosResponse<TokenType>> => {
  return instance({
    method: 'GET',
    url: `idps/${idp}/`,
  })
}

//Создание нового ИПР руководителем сотруднику
export const postNewIdp = ({
  director,
  employee,
  tasks,
  title,
}: PostNewIdp): Promise<AxiosResponse<IdpByIdType>> => {
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

//Заявка на ИПР от сотрудника
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

//Получение статистики для активного юзера
export const getStatistic = (): Promise<AxiosResponse<StatisticType>> => {
  return instance({
    method: 'GET',
    url: `statistic/`,
  })
}

interface PostCommentType {
  task_id: number
  comment: string
}

// Отправка комментария
export const postComment = ({
  task_id,
  comment,
}: PostCommentType): Promise<AxiosResponse<CommentType>> => {
  return instance({
    method: 'POST',
    url: `tasks/${task_id}/comments/`,
    data: {
      body: comment,
    },
  })
}

interface PatchTaskType {
  data: TaskType
}

//Редактирование задания внутри ИПР
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
