import {generateSourceTime,generateCrews} from './../utils/index';
import {format} from 'date-fns'
import {
  CREWS_SEARCH,CREWS_FOUND,CREWS_RESET
} from '../constants/crewConstants';

export const searchCrew = (address: string,lat: number,lon: number) => async (dispatch: any) => {

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
  // API REQUEST TO YANDEX API
  const crewsInfo: any = await generateCrews(lat,lon);
  dispatch({
    type: CREWS_FOUND,
    payload: {...crewsInfo}

  })
}

export const invalidSearch = () => (dispatch: any) => {
  dispatch({
    type: CREWS_RESET
  })
}