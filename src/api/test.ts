// const BASE_URL = 'http://localhost:8000/api'

// const handleResponse: any = (res: any): any => {
//   if (res.ok) {
//     return res.json()
//   }
//   return Promise.reject(`Ошибка: ${res}`)
// }

// const defaultHeader: any = (): any => {
//   return {
//     Authorization: `Token 01d37e01c85064b1853f12d41345042811891419`,
//     // 'Content-Type': 'application/json',
//   }
// }

// export const getProseptProducts = () => {
//   return fetch(`${BASE_URL}/employees/me/`, {
//     method: 'GET',
//     headers: defaultHeader(),
//   }).then(handleResponse) as Promise<any>
// }
