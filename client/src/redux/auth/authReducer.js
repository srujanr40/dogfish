// authReducer.js
import {
    SET_EMAIL,
    SET_PASSWORD,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE
  } from './authTypes';
  
  const initialState = {
    email: '',
    password: '',
    isLoading: false,
    error: null
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_EMAIL:
        return {
          ...state,
          email: action.payload
        };
      case SET_PASSWORD:
        return {
          ...state,
          password: action.payload
        };
      case SIGN_UP_REQUEST:
        return {
          ...state,
          isLoading: true,
          error: null
        };
      case SIGN_UP_SUCCESS:
        return {
          ...state,
          isLoading: false,
          error: null
        };
      case SIGN_UP_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  