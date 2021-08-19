import { ADD_CATEGORIES, ADD_FOOD_ITEM, GET_CATEGORIES, GET_THIS_CATEGORIES_FOODS, UPDATE_FOOD_ITEM } from './actions'

const initialFoodItem = {
  //catagories1:['foodItem1','foodItem2']
}

export default function foodItemReducer(state = initialFoodItem, action) {
  switch (action.type) {
    // categories steps
    case GET_CATEGORIES:
      if (action.payload) {
        return { ...state, ...action.payload }
      } else {
        return state
      }
    case ADD_CATEGORIES:
      const catagoriesName = action.payload.name
      return { ...state, [catagoriesName]: [] }

    //food Item steps
    case ADD_FOOD_ITEM:
      const currentCatagories = action.payload.categories
      return { ...state, [currentCatagories]: [...state[currentCatagories], action.payload] }
    case GET_THIS_CATEGORIES_FOODS:
      return { ...state, [action.payload.categoriesName]: action.payload.data }
    
    case UPDATE_FOOD_ITEM:
      const updatedFoodItems = state[action.payload.categories].map(item=>{
        if (item._id===action.payload._id) {
          return action.payload
        }else{
          return item
        }
      })
      return { ...state, [action.payload.categories]: updatedFoodItems }


    default:
      return state
  }
}
