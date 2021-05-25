import {
    EVENTS_FETCH,
    SET_EVENT,
    UPLOADING_SHEET,
    UPLOADED_SHEET,
    UPLOADED_SHEET_FAILED,
    TAKING_PHOTO,
    TAKING_PHOTO_ERROR,
    TAKEN_PHOTO,
    RESET_SUCCESS,
  } from '../Actions/Types';
  
  const INITIAL_STATE = {
    eventList: null,
    eventData: null,
    error: false,
    uploading: false,
    uploaded: false,
    loadingPhoto: false,
  };
  
  export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case EVENTS_FETCH:
            return {...state, eventList: action.payload};
        case SET_EVENT:
            return {...state, eventData: action.payload};
        case UPLOADING_SHEET:
            return {...state, error: false, uploaded: false, uploading: true}
        case UPLOADED_SHEET:
            return {...state, error: false, uploaded: true, uploading: false, source: null, uri: null};
        case UPLOADED_SHEET_FAILED:
            return {...state, error: true, uploading: false};
        case TAKING_PHOTO:
            return {...state, error: false, uploaded: false, loadingPhoto: true, uploading: false, source: null, uri: null };
        case TAKING_PHOTO_ERROR:
            return {...state, error: true, uploaded: false, loadingPhoto: false, uploading: false};
        case TAKEN_PHOTO:
            return {...state, error: false, uploaded: false, loadingPhoto: false, uploading: false, source: action.source, uri: action.uri }
        case RESET_SUCCESS:
            return {...state, uploaded: false}
        default:
            return state;
    }
  };