import { message, Modal, notification } from 'antd'
import { SHOW_MESSAGE, SHOW_MODAL, SHOW_NOTIFICATION } from './Action'

const notificationState = {}
const key = 'updatable'

export default function notificationReducer(state = notificationState, action) {
  const massageType = action?.payload?.massageType
  switch (action.type) {
    case SHOW_NOTIFICATION:
      notification[massageType]({
        message: action.payload?.message,
        description: action.payload?.description,
      })
      return state
    case SHOW_MESSAGE:
      message[massageType]({
        content: action?.payload?.content,
        key,
        duration: action?.payload?.duration,
      })
      return state
    case SHOW_MODAL:
      Modal.success({
        content: action?.payload?.content,
      })
      return state
    default:
      return state
  }
}
