import { combineReducers } from 'redux';
import { sessionReducer, featuredSession } from './sessionReducer';
import updateProfile from './updateProfile';
import { chatReducer } from "./chatReducer";
import sessionsReducer from './sessionsSlice';

const rootReducer = combineReducers({
  sessionReducer,
  updateProfile,
  featuredSession,
  chatRed: chatReducer,
  sessions: sessionsReducer
});

export default rootReducer;
