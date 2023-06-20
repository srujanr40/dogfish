import { combineReducers } from 'redux';
import {sessionReducer} from './sessionReducer';
import updateProfile from './updateProfile';

const rootReducer = combineReducers({
    sessionReducer,
    updateProfile
});

export default rootReducer;