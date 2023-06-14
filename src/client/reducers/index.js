import { combineReducers } from 'redux';
import {createNewSession, fetchSession} from './sessionReducer';
import updateProfile from './updateProfile';

const rootReducer = combineReducers({
    createNewSession,
    fetchSession,
    updateProfile
});

export default rootReducer;