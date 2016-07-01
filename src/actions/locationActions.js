import LocationApi from '../api/mockLocationApi';
import * as types from './actionTypes';

const loadLocationSuccess = locations => ({type: types.LOAD_LOCATIONS_SUCCESS, locations});

export const loadLocation = () => (() => LocationApi.getAllLocations().map(
  locations => loadLocationSuccess(locations)));

export default loadLocationSuccess;
