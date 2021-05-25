import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import DressageSheetActions from './DressageSheetReducer';
import MainReducer from './MainReducer';

export default combineReducers({
  auth: AuthReducer,
  dSheets: DressageSheetActions,
  main: MainReducer,
});