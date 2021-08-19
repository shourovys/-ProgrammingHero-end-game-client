import { getOrdersApi, updateOrdersStateApi, updateOrdersStatusApi } from 'configs'
import { showNotification } from 'redux/Notification/Action'

export const GET_ORDERS = 'GET_ORDERS'

export const getOrders = (page, setLoading) => async dispatch => {
  dispatch({
    type: GET_ORDERS,
    payload: {
      data: null,
      currentPage: 1,
      numberOfPages: 5,
    },
  })

  try {
    const { data } = await getOrdersApi(page)
    console.log('🚀 ~ file: Action.js ~ line 11 ~ data', data)

    dispatch({ type: GET_ORDERS, payload: data })
  } catch (error) {
    console.log(error)
    dispatch(
      showNotification({
        message: error.Error || 'Some error happened, Please try again',
        massageType: 'error',
      }),
    )
  }
  // setLoading(false)
}

export const UPDATE_ORDER = 'UPDATE_ORDER'
export const updateOrderStatus = (updateInfo, setLoadingStep) => async dispatch => {
  console.log('🚀 ~ file: action.js ~ line 35 ~ updateInfo', updateInfo)
  try {
    const { data } = await updateOrdersStatusApi(updateInfo)
    console.log('🚀 ~ file: actions.js ~ line 10 ~ data', data)
    dispatch(showNotification({ message: 'Order Update Successfully', massageType: 'success' }))
    dispatch({ type: UPDATE_ORDER, payload: data?.updated })

    data.saveUserDiscount &&
      dispatch(
        showNotification({
          message: `${data?.saveUserDiscount?.userId} get ৳ ${data?.saveUserDiscount?.amount} Taka Discount on Next order`,
          massageType: 'success',
        }),
      )
  } catch (error) {
    console.log(error)
    dispatch(
      showNotification({
        message: error.Error || 'Some error happened, Please try again',
        massageType: 'error',
      }),
    )
  } finally {
    setLoadingStep(-1)
  }
}
export const UPDATE_ORDER_STATE = 'UPDATE_ORDER_STATE'
export const updateOrderState = orderId => async dispatch => {
  console.log('this action call ')
  try {
    const { data } = await updateOrdersStateApi(orderId)
    console.log('🚀 ~ file: actions.js ~ line 10 ~ data', data)
    dispatch({ type: UPDATE_ORDER_STATE, payload: data?.updated })
  } catch (error) {
    console.log(error)
  }
}
