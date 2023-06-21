import { combineReducers } from 'redux';
import {sessionReducer, featuredSession} from './sessionReducer';
import updateProfile from './updateProfile';

const rootReducer = combineReducers({
    sessionReducer,
    updateProfile,
    featuredSession,

})

export default rootReducer;