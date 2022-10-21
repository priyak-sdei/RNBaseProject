import {applyMiddleware, createStore, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';
//import * as reducers from '../reducers';
import addTodoReducer from '../reducers/todo';
export const storeObj = {};
const setup = () => {
  const reducer = combineReducers({addTodoReducer});
  const store = createStore(reducer, applyMiddleware(thunk));
  storeObj.store = store;
  return store;
};
export default setup;
