import { ADD_SERVICE, GET_SERVICE, UPDATE_SERVICE } from './actions'

const initialFoodItem = []

export default function servicesReducer(state = initialFoodItem, action) {
  switch (action.type) {
    case ADD_SERVICE:
      return [...state,action.payload]

    case GET_SERVICE:
      return action.payload
    
    case UPDATE_SERVICE:
      return state.map(service=>service._id===action.payload._id?action.payload:service)

    default:
      return state
  }
}
