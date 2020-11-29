import {generateSourceTime,generateResponseOrder} from './../utils/index';

import {
  ORDER_REQUEST,ORDER_SUCCESS,ORDER_ERROR
} from '../constants/orderConstants';



export const createOrder = () => async (dispatch: any,getState: any) => {
  try {
    console.log('getState',getState)
    const source_time = generateSourceTime();
    console.log('getState()',getState())
    const {crew:
      {
        clientInfo: addresses
      }
    } = getState()
    dispatch({
      type: ORDER_REQUEST,
      payload: {
        orderInfo: {
          source_time,
          addresses
        }
      }
    })
    const response = await generateResponseOrder();
    dispatch({
      type: ORDER_SUCCESS,
      payload: response
    })
  }
  catch(error) {
    console.error('error',error);
    dispatch({
      type: ORDER_ERROR
    })
  }
}