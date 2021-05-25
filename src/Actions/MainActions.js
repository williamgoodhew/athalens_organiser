import {
    OPEN_MENU,
    CLOSE_MENU,
} from './Types';

export const openMenu = () => {
    return dispatch => {
        dispatch({
        type: OPEN_MENU,
        })
    }
}

export const closeMenu = () => {
    return dispatch => {
        dispatch({
        type: CLOSE_MENU,
        })
    }
}