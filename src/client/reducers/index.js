import { combineReducers } from 'redux';
import {createNewSession, fetchSession, featuredSession} from './sessionReducer';
import updateProfile from './updateProfile';

const rootReducer = combineReducers({
    createNewSession,
    fetchSession,
    updateProfile,
    featuredSession,
});

export default rootReducer;