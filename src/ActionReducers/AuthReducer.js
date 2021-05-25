import {
    LAUNCH_SCREEN,
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    SIGN_IN,
    AUTH_LOADING,
    SIGN_IN_ERROR,
    GET_PROFILE,
    SIGN_OUT,
  } from '../Actions/Types';
  
  const INITIAL_STATE = {
    user: null,
  };
  
  export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case GET_PROFILE:
            return {...state, profile: action.payload, error: ''};
        case LAUNCH_SCREEN:
            return {...state, user: action.payload}
        case EMAIL_CHANGED:
            return {...state, email: action.email, emailCheck: action.emailCheck, loading: false, success: ''};
        case PASSWORD_CHANGED:
            return {...state, password: action.password, passwordCheck: action.passwordCheck, loading: false, error: ''};
        case SIGN_IN:
            return {...state, user: action.payload, loading: false, password: ''}
        case SIGN_OUT:
            return {...state, loading: false, password: ''};
        case SIGN_IN_ERROR:
            return {...state, loading: false, error: action.error}
        case AUTH_LOADING:
            return {...state, loading: true, error: ''};
        default:
            return state;
    }
  };