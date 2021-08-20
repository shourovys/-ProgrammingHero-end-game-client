import notificationReducer from "./Notification/Reducers";
import ordersReducer from "./orders/reducers";
import servicesReducer from "./service/reducers";
import userReducer from "./user/reducers";

const { combineReducers } = require("redux");


export const rootReducer = combineReducers(
    {
        user:userReducer,
        Notification:notificationReducer,
        services:servicesReducer,
        orders:ordersReducer,
    }
)
