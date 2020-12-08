import {Dispatch} from 'redux';
import {generateSourceTime,generateCrews} from './../utils/index';
import {
  CREWS_SEARCH,CREWS_FOUND,CREWS_RESET
} from '../constants/crewConstants';
import type * as Types from '../Types';

export const searchCrew = (address: string,lat: number,lon: number) => async (dispatch: Dispatch<Types.ISearchCrew>) => {
  const clientInfo = {
    source_time: generateSourceTime(),
    addresses: [
      {
        address,
        lat,
        lon
      }
    ]
  }
  dispatch({
    type: CREWS_SEARCH,
    payload: {...clientInfo}
  })

  const crewsInfo: Types.ICrewsInfo = await generateCrews(lat,lon);
  dispatch({
    type: CREWS_FOUND,
    payload: crewsInfo
  })
}

export const invalidSearch = () => (dispatch: Dispatch<Types.ISearchCrew>) => {
  dispatch({
    type: CREWS_RESET
  })
}