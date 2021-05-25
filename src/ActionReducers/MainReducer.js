import {
    OPEN_MENU,
    CLOSE_MENU,
  } from '../Actions/Types';
  
const INITIAL_STATE = {
    menuOpen: false,
};
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case OPEN_MENU:
            return {...state, menuOpen: true};
        case CLOSE_MENU:
            return {...state, menuOpen: false};
        default:
            return state;
    }
  };