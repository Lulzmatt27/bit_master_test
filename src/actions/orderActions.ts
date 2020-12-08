import {Dispatch} from 'redux';
import {generateSourceTime,generateResponseOrder} from './../utils/index';
import {
  ORDER_REQUEST,ORDER_SUCCESS,ORDER_ERROR
} from '../constants/orderConstants';
import type * as Types from '../Types';
export const createOrder = () => async (dispatch: Dispatch<Types.IOrder>,getState: any) => {
  try {
    const source_time = generateSourceTime();
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

    const response: Types.IOrderSuccess = await generateResponseOrder();
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