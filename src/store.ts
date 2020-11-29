import {createStore,applyMiddleware,combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import {orderReducer} from './reducers/orderReducer'
import {crewReducer} from './reducers/crewReducer'
const reducer = combineReducers({
  order: orderReducer,
  crew: crewReducer
})
const initialState = {

}
const middleware = [thunk];
const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))
export default store;