import { addProjectReducer, addCardReducer } from './reducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  addProjectReducer, addCardReducer
})

export default rootReducer;