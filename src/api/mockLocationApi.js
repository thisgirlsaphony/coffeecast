import delay from './delay';
import {Observable} from 'rxjs';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const locations = [
  {
    id: '1',
    name: 'Home',
    description: 'Where I sleep at night.',
    taps: [1, 2]
  },
  {
    id: '2',
    name: 'WeWork',
    description: 'The office I generally work at.',
    taps: [3, 4]
  },
  {
    id: '3',
    name: 'Rightpoint',
    description: 'The office I sometimes work at',
    taps: [5, 6]
  }
];

class LocationApi {
  static getAllLocations() {
    return Observable.of(Object.assign([], locations)).delay(delay);
  }
}

export default LocationApi;
