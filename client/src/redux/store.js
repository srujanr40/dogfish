import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import sessionReducer from './reducers/sessionReducer';
import profileReducer from './profile/profileReducer';
import chatReducer from "./reducers/chatReducer";

const rootReducer = combineReducers({
    sessionReducer,
    profileReducer,
    chatRed: chatReducer,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;