import {
  ORDER_REQUEST,ORDER_SUCCESS,ORDER_ERROR,
} from '../constants/orderConstants';
interface IState {

}
interface IAction {
  type: string,
  payload?: any
}


export const orderReducer = (state = {},action: IAction) => {
  switch(action.type) {
    case ORDER_REQUEST:
      return {
        loading: true
      }
    case ORDER_SUCCESS:
      return {
        loading: false,
        orderCreated: true,
        orderInfo: action.payload
      }
    case ORDER_ERROR:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}