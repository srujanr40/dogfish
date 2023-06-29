import { combineReducers } from 'redux';
import { sessionReducer } from './sessionReducer';
import profileReducer from './profileReducer';
import { chatReducer } from "./chatReducer";

const rootReducer = combineReducers({
  sessionReducer,
  profileReducer,
  chatRed: chatReducer,
});

export default rootReducer;
