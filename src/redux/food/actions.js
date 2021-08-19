import {
  addCategoriesApi,
  addFoodItemApi,
  getCategoriesApi,
  getThisCategoriesFoodsApi,
  updateFoodItemApi,
} from 'configs'
import { showNotification } from 'redux/Notification/Action'

export const ADD_FOOD_ITEM = 'ADD_FOOD_ITEM'
export const addFoodItem = (formData, setLoading, onClose) => async dispatch => {
  try {
    const { data } = await addFoodItemApi(formData)
    dispatch({ type: ADD_FOOD_ITEM, payload: data })
    setLoading(false)
    onClose()
    dispatch(
      showNotification({ message: 'New Food Item Added Successfully', massageType: 'success' }),
    )
  } catch (error) {
    console.log('🚀 ~ file: actions.js ~ line 20 ~ error', error)

    dispatch(
      showNotification({
        message: error.Error || 'Some error happened, Please try again',
        massageType: 'error',
      }),
    )
    setLoading(false)
  }
}

export const UPDATE_FOOD_ITEM = 'UPDATE_FOOD_ITEM'
export const updateFoodItem = (formData, setLoading, onClose) => async dispatch => {
  console.log('🚀 ~ file: actions.js ~ line 35 ~ formData', formData)
  try {
    const { data } = await updateFoodItemApi(formData)
    dispatch({ type: UPDATE_FOOD_ITEM, payload: data })
    setLoading(false)
    onClose()
    dispatch(
      showNotification({ message: 'Food Item updated Successfully', massageType: 'success' }),
    )
  } catch (error) {
    console.log('🚀 ~ file: actions.js ~ line 20 ~ error', error)

    dispatch(
      showNotification({
        message: error.Error || 'Some error happened, Please try again',
        massageType: 'error',
      }),
    )
    setLoading(false)
  }
}

export const GET_THIS_CATEGORIES_FOODS = 'GET_THIS_CATEGORIES_FOODS'
export const getThisCategoriesFoods = (
  categoriesName,
  setListData,
  setLoading,
  selectedMenu,
) => async dispatch => {
  const { data } = await getThisCategoriesFoodsApi(categoriesName)
  console.log('🚀 ~ file: actions.js ~ line 63 ~ data', data)
  if (selectedMenu !== 'All') {
    const filterData = data.filter(item => item.menuTime.includes(selectedMenu))
    setListData(filterData)
  } else {
    setListData(data)
  }
  // setListData(data)
  setLoading(false)
  dispatch({
    type: GET_THIS_CATEGORIES_FOODS,
    payload: { categoriesName: categoriesName, data: data },
  })
}

//Categories
export const ADD_CATEGORIES = 'ADD_CATEGORIES'
export const addCategoriesItem = (formData, setLoading, onClose) => async dispatch => {
  try {
    const { data } = await addCategoriesApi(formData)
    setLoading(false)
    onClose()
    dispatch(
      showNotification({ message: 'New Food Item Added Successfully', massageType: 'success' }),
    )
    dispatch({ type: ADD_CATEGORIES, payload: data })
  } catch (error) {
    console.log(error)
    dispatch(
      showNotification({
        message: error.Error || 'Some error happened, Please try again',
        massageType: 'error',
      }),
    )
  }
  setLoading(false)
}

export const GET_CATEGORIES = 'GET_CATEGORIES'
export const getCategoriesItem = setTopLoading => async dispatch => {
  try {
    setTopLoading(true)
    const { data } = await getCategoriesApi()
    dispatch({ type: GET_CATEGORIES, payload: data })
    setTopLoading(false)
  } catch (error) {
    console.log(error)
  }
}
