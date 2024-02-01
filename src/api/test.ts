import axios from 'axios'

const BASE_URL = 'https://api.new.red-hand.ru/api'

// const handleResponse = (res:<T>):T => {
//   if (res.ok) {
//     return res
//   }
//   return Promise.reject(`Ошибка: ${res}`)
// }

const getToken = <T>(): Promise<T> => {
  return axios({
    method: 'POST',
    url: `${BASE_URL}/api/auth`,
    data: { email: 'zoduvon-ofe57@alfabank.ru' },
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
