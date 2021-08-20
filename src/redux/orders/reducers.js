import {
  GET_ADMIN_ORDERS,
  GET_USER_ORDERS,
  UPDATE_ORDER
} from "./action";

const orders = {
  userOrders: [],
  adminOrders: [],
};

export default function ordersReducer(state = orders, action) {
  switch (action.type) {
    case GET_USER_ORDERS:
      return {
        ...state,
        userOrders: action.payload,
      };

    case GET_ADMIN_ORDERS:
      return {
        ...state,
        adminOrders: action.payload,
      };

    case UPDATE_ORDER:
      return {
        ...state,
        adminOrders: state?.adminOrders.map((order) =>
          order._id === action.payload._id ? action.payload : order
        ),
      };

    default:
      return state;
  }
}
