import LocationApi from '../api/mockLocationApi';
import * as types from './actionTypes';
import handleError from '../handlers/errorHandler';

const loadLocationSuccess = locations => ({type: types.LOAD_LOCATIONS_SUCCESS, locations});

export const loadLocation = () => (() => LocationApi.getAllLocations().map(
  locations => loadLocationSuccess(locations),
  err => handleError(err)));

export default loadLocationSuccess;
