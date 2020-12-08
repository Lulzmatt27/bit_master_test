import {
  CREWS_SEARCH,CREWS_FOUND,CREWS_RESET
} from '../constants/crewConstants';
import type * as Types from '../Types'

export const crewReducer = (state = {},action: Types.ISearchCrew) => {
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