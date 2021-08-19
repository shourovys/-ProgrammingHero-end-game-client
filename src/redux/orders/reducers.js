import { GET_ORDERS, UPDATE_ORDER, UPDATE_ORDER_STATE } from './action'

const orders = {
  data: null,
  currentPage: 1,
  numberOfPages: 5,
}

export default function notificationReducer(state = orders, action) {
  switch (action.type) {
    case GET_ORDERS:
      return action.payload

    case UPDATE_ORDER:
      const updateList = state?.data.map(order => {
        if (order._id === action.payload._id) {
          return action.payload
        } else {
          return order
        }
      })
      return {
        data: updateList,
        currentPage: 1,
        numberOfPages: 5,
      }

    case UPDATE_ORDER_STATE:
      const updateState = state?.data.map(order => {
        if (order._id === action.payload._id) {
          return action.payload
        } else {
          return order
        }
      })
      return {
        data: updateState,
        currentPage: 1,
        numberOfPages: 5,
      }

    default:
      return state
  }
}
