import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:4000' })

API.interceptors.request.use(req => {
  const token = JSON.parse(localStorage.getItem('profile'))?.token;
  if (token) {
    req.headers.Authorization = `bearer ${token}`
  }
  return req
})

//auth
export const createUserApi = formData => API.post(`/auth/sineUp`, formData)
export const loginUserApi = formData => API.post(`/auth/login`, formData)

//service
export const addServiceApi = formData => API.post(`/services/add`, formData)
export const updateServiceApi = formData => API.post(`/services/update`, formData)
export const getServiceApi = () => API.get(`/services/get`)



//food Menu
export const updateMenuApi = formData => API.post(`/menu/add`, formData)
export const getMenuApi = () => API.get(`/menu/get`)
//Orders
export const getOrdersApi = page => API.get(`/order/get?page=${page}`)
export const updateOrdersStatusApi = updateInfo => API.post(`/order/update`, updateInfo)
export const updateOrdersStateApi = orderId => API.get(`/order/update/state?orderId=${orderId}`)
