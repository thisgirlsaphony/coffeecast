import TapApi from '../api/mockTapApi';
import * as types from './actionTypes';
import handleError from '../handlers/errorHandler';
import toastr from 'toastr';


const loadTapsSuccess = (taps) => ({type: types.LOAD_TAP_SUCCESS, taps});
const updateTapStatus = (tapStatus) => ({type: types.UPDATE_TAP_STATUS, tapStatus});

export const loadTaps = () => (() => TapApi.getAllTaps().map(
  taps => loadTapsSuccess(taps),
  err => handleError(err)));

export const monitorTaps = () => (() => TapApi.tapMonitor().map(
  tapStatus => updateTapStatus(tapStatus)));

export const openTap = (id) => (() => TapApi.openTap(id).map(
  tapStatus => updateTapStatus(tapStatus)).finally(() => {
  toastr.info('The tap is closed!');
}));

export const closeTap = (id) => (() => TapApi.closeTap(id).map(
  tapStatus => updateTapStatus(tapStatus)));

export default loadTapsSuccess;
