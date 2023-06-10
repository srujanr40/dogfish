import { combineReducers } from 'redux';
import createNewSession from './sessionReducer';
import fetchSession from './fetchedSessionReducer';
import updateProfile from './updateProfile';

const rootReducer = combineReducers({
    createNewSession,
    fetchSession,
    updateProfile
});

export default rootReducer;