import TapApi from '../api/mockTapApi';
import * as types from './actionTypes';
import handleError from '../handlers/errorHandler';
import toastr from 'toastr';


const loadTapsSuccess = (taps) => ({type: types.LOAD_TAP_SUCCESS, taps});
const updateTapStatus = (tapStatus) => ({type: types.UPDATE_TAP_STATUS, tapStatus});
//const tapMonitorClosed = (message) => ({type: types.TAP_MONITOR_CLOSED, message});

export const loadTaps = () => (() => TapApi.getAllTaps().map(
  taps => loadTapsSuccess(taps),
  err => handleError(err)));

export const monitorTaps = () => (() => TapApi.tapMonitor().map(
  tapStatus => updateTapStatus(tapStatus),
  err => handleError(err),
  () => {
    toastr.info('done');
  }));

export default loadTapsSuccess;
