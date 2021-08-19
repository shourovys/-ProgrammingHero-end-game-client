import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:4000' })

API.interceptors.request.use(req => {
  const token = JSON.parse(localStorage.getItem('profile'))?.authorized
  if (token) {
    req.headers.Authorization = `bearer ${token}`
  }
  return req
})

//auth
export const createUserApi = formData => API.post(`/auth/sineUp`, formData)
export const loginUserApi = formData => API.post(`/auth/login`, formData)

//food Item
export const addFoodItemApi = formData => API.post(`/foodItem/add`, formData)
export const updateFoodItemApi = formData => API.post(`/foodItem/update`, formData)
export const getThisCategoriesFoodsApi = categoriesName =>
  API.get(`/foodItem/CategoriesFood/${categoriesName}`)
//food Categories
export const addCategoriesApi = formData => API.post(`/categories/add`, formData)
export const getCategoriesApi = () => API.get(`/categories/get`)
//food Menu
export const updateMenuApi = formData => API.post(`/menu/add`, formData)
export const getMenuApi = () => API.get(`/menu/get`)
//Orders
export const getOrdersApi = page => API.get(`/order/get?page=${page}`)
export const updateOrdersStatusApi = updateInfo => API.post(`/order/update`, updateInfo)
export const updateOrdersStateApi = orderId => API.get(`/order/update/state?orderId=${orderId}`)
//discount
export const getDiscountModelApi = () => API.get(`/discount/model/get`)
export const addDiscountModelApi = formData => API.post(`/discount/add`, formData)
export const getUserDiscountApi = () => API.get(`/discount/get`)

//dashboard
export const getDashboardOrderDataApi = () => API.get(`/order/dashboard/get`)

export const BASE_URL = 'https://api.enalo.in/'
