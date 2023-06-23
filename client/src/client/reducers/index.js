import { combineReducers } from 'redux';
import {sessionReducer, featuredSession} from './sessionReducer';
import updateProfile from './updateProfile';
import {chatReducer} from "./chatReducer";

const rootReducer = combineReducers({
    sessionReducer,
    updateProfile,
    featuredSession,
    chatRed: chatReducer,
})

export default rootReducer;