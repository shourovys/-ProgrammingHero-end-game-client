import { ADD_MENU, GET_MENU_DATA } from './actions'

const initialFoodItem = [
  
]

export function foodMenuData(state = initialFoodItem, action) {
  switch (action.type) {
    case ADD_MENU:
      localStorage.setItem('foodMenu', JSON.stringify(action.payload))
      return action.payload
    case GET_MENU_DATA:
      localStorage.setItem('foodMenu', JSON.stringify(action.payload))
      return action.payload
    default:
      const foodMenu = JSON.parse(localStorage.getItem('foodMenu')||"[]")
      return foodMenu
      
  }
}
