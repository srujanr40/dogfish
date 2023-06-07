import { combineReducers } from 'redux';
import createNewSession from './sessionReducer';

const rootReducer = combineReducers({
    createNewSession
});

export default rootReducer;