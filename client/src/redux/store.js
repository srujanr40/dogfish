import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import sessionReducer from './session/sessionReducer';
import profileReducer from './profile/profileReducer';
import chatReducer from "./chat/chatReducer";
import authReducer from "./auth/authReducer"
import forumReducer from "./forum/forumReducer";

const rootReducer = combineReducers({
    sessionReducer,
    profileReducer,
    chatReducer,
    auth: authReducer,
    forumReducer,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;