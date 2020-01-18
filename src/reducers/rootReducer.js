import { addProjectReducer, addCardReducer } from './reducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  projects: addProjectReducer,
  cards: addCardReducer
})

export default rootReducer;