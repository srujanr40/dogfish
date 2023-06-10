import { combineReducers } from 'redux';
import createNewSession from './sessionReducer';
import fetchSession from './fetchedSessionReducer';


const rootReducer = combineReducers({
    createNewSession,
    fetchSession
});

export default rootReducer;