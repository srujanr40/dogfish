import { combineReducers } from 'redux';
import createNewSession from './sessionReducer';
import updateProfile from './updateProfile';

const rootReducer = combineReducers({
    createNewSession,
    updateProfile
});

export default rootReducer;