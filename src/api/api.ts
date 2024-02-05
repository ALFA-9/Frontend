import axios, { AxiosResponse } from 'axios'
import {
  CommentType,
  IdpByIdType,
  TaskType,
  UserType,
  PostNewIdp,
  EmployeeType,
  SubordinatesType,
} from './api-types'
import { IdpStatuses } from '../types'

export const BASE_URL = 'https://api.new.red-hand.ru'

interface TokenType {
  token: string
}

//Получить токен
export const postToken = (): Promise<AxiosResponse<TokenType>> => {
  return axios({
    method: 'POST',
    url: `${BASE_URL}/api/auth/`,
    data: { email: 'zoduvon-ofe57@alfabank.ru' },
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

//Получить данные активного юзера
export const getUserMe = (token:string): Promise<AxiosResponse<UserType>> => {
  return axios({
    method: 'GET',
    url: `${BASE_URL}/api/employees/me/`,
    headers:{
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`
    }
  })
}

const instance = axios.create({
  baseURL: BASE_URL + '/api/',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Token ${localStorage.getItem('token')}`,
  },
})

//Получить данные всех сотрудников моего подразделения
export const getAllEmployeesInMyUnit = (): Promise<
  AxiosResponse<EmployeeType[]>
> => {
  return instance({
    method: 'GET',
    url: `employees/`,
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

//Получить данные руководителя текущего пользователя
export const getUserDirectors = (): Promise<AxiosResponse<UserType>> => {
  return instance({
    method: 'GET',
    url: `employees/directors/`,
  })
}

//Получить подчиненных активного юзера с вложенностью
export const getSubordinates = (): Promise<
  AxiosResponse<SubordinatesType[]>
> => {
  return instance({
    method: 'GET',
    url: `employees/subordinates/`,
  })
}

interface getIdpDataById {
  idp: number
}

//Получить ИПР(его задания и комментарии) по ID
export const getIdpDataById = ({
  idp,
}: getIdpDataById): Promise<AxiosResponse<IdpByIdType>> => {
  return instance({
    method: 'GET',
    url: `idps/${idp}/`,
  })
}

interface PathIdpStatusType {
  title: string
  status_idp: IdpStatuses
  idp: number
}

//Редактирование статуса ИПР
export const pathIdpStatus = ({
  idp,
  status_idp,
  title,
}: PathIdpStatusType): Promise<AxiosResponse<PathIdpStatusType>> => {
  return instance({
    method: 'PATCH',
    url: `idps/${idp}/`,
    data: {
      status_idp: status_idp,
    },
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
