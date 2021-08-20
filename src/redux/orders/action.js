import { createOrderApi, getAdminOrdersApi, getUserOrdersApi, updateOrdersStatusApi } from '../../api'
import { showNotification } from '../Notification/Action'



export const GET_USER_ORDERS = 'GET_USER_ORDERS'

export const getUserOrders = () => async dispatch => {
  try {
    const { data } = await getUserOrdersApi()
    console.log('🚀 ~ file: Action.js ~ line 11 ~ data', data)

    dispatch({ type: GET_USER_ORDERS, payload: data })
  } catch (error) {
    console.log(error)
    dispatch(
      showNotification({
        message: error.Error || 'Some error happened, Please try again',
        massageType: 'error',
      }),
    )
  }
}


export const GET_ADMIN_ORDERS = 'GET_ADMIN_ORDERS'

export const getAdminOrders = () => async dispatch => {
  try {
    const { data } = await getAdminOrdersApi()
    console.log('🚀 ~ file: Action.js ~ line 11 ~ data', data)

    dispatch({ type: GET_ADMIN_ORDERS, payload: data })
  } catch (error) {
    console.log(error)
    dispatch(
      showNotification({
        message: error.Error || 'Some error happened, Please try again',
        massageType: 'error',
      }),
    )
  }
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
export const CREATE_ORDER = 'CREATE_ORDER'
export const createOrder = (orderInfo, history) => async dispatch => {
  try {
    const { data } = await createOrderApi(orderInfo)
    dispatch({ type: CREATE_ORDER, payload: data })
    dispatch(showNotification({ massageType: "success", message: `Your order successfully created` }));
    history.push('/orders')
  } catch (error) {
    console.log(error)
    showNotification({
      message: error?.response?.data?.message,
      massageType: "error",
    })
  }
}
