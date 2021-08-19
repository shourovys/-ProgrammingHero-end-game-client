//Menu action

import { getMenuApi, updateMenuApi } from 'configs'
import { showNotification } from 'redux/Notification/Action'

export const ADD_MENU = 'ADD_MENU'
export const addMenuItem = (formData, setLoading, onClose) => async dispatch => {
  console.log('🚀 ~ file: actions.js ~ line 8 ~ formData', formData)
  try {
    const { data } = await updateMenuApi(formData)
    console.log('🚀 ~ file: actions.js ~ line 10 ~ data', data)
    setLoading(false)
    onClose()
    dispatch(
      showNotification({ message: 'Your Menu Time Update Successfully', massageType: 'success' }),
    )
    dispatch({ type: ADD_MENU, payload: data?.foodMenu })
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

export const GET_MENU_DATA = 'GET_MENU_DATA'
export const getMenuItemData = () => async dispatch => {
  try {
    const { data } = await getMenuApi()
    console.log('🚀 ~ file: actions.js ~ line 33 ~ data', data)
    dispatch({ type: GET_MENU_DATA, payload: data[0]?.foodMenu })
  } catch (error) {
    console.log(error)
  }
}
