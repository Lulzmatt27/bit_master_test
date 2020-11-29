import {
  CREWS_SEARCH,CREWS_FOUND,CREWS_RESET
} from '../constants/crewConstants';
interface IState {

}
interface IAction {
  type: string,
  payload?: any
}


export const crewReducer = (state = {},action: IAction) => {
  switch(action.type) {
    case CREWS_SEARCH:
      return {
        ...state,
        loading: true,
        clientInfo: action.payload
      }
    case CREWS_FOUND:
      return {
        ...state,
        loading: false,
        crewInfo: action.payload
      }
    case CREWS_RESET:
      return {}
    default:
      return state
  }
}