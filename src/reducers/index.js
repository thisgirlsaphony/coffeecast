import { combineReducers } from 'redux';
import coffees from './coffeeReducer';
import taps from './tapReducer';
import locations from './locationReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  coffees,
  taps,
  locations,
  ajaxCallsInProgress
});

export default rootReducer;
