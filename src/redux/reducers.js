import userReducer from "./user/reducers";

const { combineReducers } = require("redux");


export const rootReducer = combineReducers(
    {
        user:userReducer,
    }
)
