import delay from './delay';
import {Observable} from 'rxjs';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const taps = [
  {
    id: '1',
    coffeeId: '1',
    level: 75,
    pouring: false
  },
  {
    id: '2',
    coffeeId: '2',
    level: 40,
    pouring: false
  },
  {
    id: '3',
    coffeeId: '1',
    level: 90,
    pouring: false
  },
  {
    id: '4',
    coffeeId: '3',
    level: 100,
    pouring: false
  },
  {
    id: '5',
    coffeeId: '1',
    level: 20,
    pouring: false
  },
  {
    id: '6',
    coffeeId: '4',
    level: 60,
    pouring: false
  }
];
const tapScript = [
  {tapId: 1, isOpen: true},
  {tapId: 5, isOpen: true},
  {tapId: 1, isOpen: false},
  {tapId: 3, isOpen: true},
  {tapId: 1, isOpen: true},
  {tapId: 2, isOpen: true},
  {tapId: 1, isOpen: true},
  {tapId: 2, isOpen: false},
  {tapId: 1, isOpen: true}
];

class TapApi {
  static getAllTaps() {
    return Observable.of(Object.assign([], taps)).delay(delay);
  }

  static tapMonitor() {
    return Observable.create(observer => {
      let i = 1;
      setInterval(() => {
        observer.next(tapScript[i]);
        i++;
        if(i == tapScript.length) {
          observer.complete();
        }
      }, 1000, tapScript.length);
    });
  }
}

export default TapApi;
