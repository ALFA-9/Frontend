import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { UserType } from '../../api/api-types'

// Define a type for the slice state

interface ActiveUserType {
  user: UserType
}

const initialState: ActiveUserType = {
  user: {
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
  },
}

const activeUser = createSlice({
  name: 'activeUser',
  initialState,
  reducers: {
    setActiveUser: (state, action: PayloadAction<ActiveUserType>) => {
      state.user = action.payload.user
    },
  },
})

export const { setActiveUser } = activeUser.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectActiveUser = (state: RootState) => state.activeUser

export default activeUser.reducer
