import { combineReducers } from 'redux';
import { sessionReducer } from './sessionReducer';
import updateProfile from './updateProfile';
import { chatReducer } from "./chatReducer";

const rootReducer = combineReducers({
  sessionReducer,
  updateProfile,
  chatRed: chatReducer,
});

export default rootReducer;
