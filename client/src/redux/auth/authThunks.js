import {
    SET_EMAIL,
    SET_PASSWORD,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE
  } from './authTypes';
  import { signUp } from './authService';

  export const loginSuccess = (data) => {
    return {
      type: 'LOGIN_SUCCESS',
      payload: data
    };
  };
  
  export const loginFailure = (error) => {
    return {
      type: 'LOGIN_FAILURE',
      payload: error
    };
  };
  
  export const setEmail = (email) => ({
    type: SET_EMAIL,
    payload: email
  });
  
  export const setPassword = (password) => ({
    type: SET_PASSWORD,
    payload: password
  });
  
  export const signUpRequest = () => ({
    type: SIGN_UP_REQUEST
  });
  
  export const signUpSuccess = () => ({
    type: SIGN_UP_SUCCESS
  });
  
  export const signUpFailure = (error) => ({
    type: SIGN_UP_FAILURE,
    payload: error
  });
  
  export const signUpAsync = () => {
    return async (dispatch, getState) => {
      dispatch(signUpRequest());
  
      const { email, password } = getState().auth;
  
      try {
        await signUp(email, password);
        dispatch(signUpSuccess());
      } catch (error) {
        dispatch(signUpFailure(error));
      }
    };
  };
  