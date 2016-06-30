import delay from './delay';
import {Observable} from 'rxjs';
import * as _ from 'lodash';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const taps = [
  {
    id: '1',
    coffeeId: '1',
    level: 0.75,
    pouring: false
  },
  {
    id: '2',
    coffeeId: '2',
    level: 0.40,
    pouring: false
  },
  {
    id: '3',
    coffeeId: '1',
    level: 0.90,
    pouring: false
  },
  {
    id: '4',
    coffeeId: '3',
    level: 1.00,
    pouring: false
  },
  {
    id: '5',
    coffeeId: '1',
    level: 0.20,
    pouring: false
  },
  {
    id: '6',
    coffeeId: '4',
    level: 0.60,
    pouring: false
  }
];
const tapScript = [
  null,
  {tapId: 1, pouring: true},
  null,
  null,
  null,
  null,
  {tapId: 1, pouring: false, levelAdjustment: -0.10},
  null,
  {tapId: 2, pouring: true},
  null,
  null,
  null,
  {tapId: 2, pouring: false, levelAdjustment: -0.10},
  {tapId: 1, pouring: true},
  null,
  null,
  null,
  null,
  {tapId: 1, pouring: false, levelAdjustment: -0.10},
  null,
  {tapId: 2, pouring: true},
  null,
  null,
  null,
  {tapId: 2, pouring: false, levelAdjustment: -0.10},
  {tapId: 1, pouring: true},
  null,
  null,
  null,
  null,
  {tapId: 1, pouring: false, levelAdjustment: -0.10},
  null,
  {tapId: 2, pouring: true},
  null,
  null,
  null,
  {tapId: 2, pouring: false, levelAdjustment: -0.10},
  {tapId: 1, pouring: true},
  null,
  null,
  null,
  null,
  {tapId: 1, pouring: false, levelAdjustment: -0.10},
  null,
  {tapId: 2, pouring: true},
  null,
  null,
  null,
  {tapId: 2, pouring: false, levelAdjustment: -0.10}
];

class TapApi {
  static getAllTaps() {
    return Observable.of(Object.assign([], taps)).delay(delay);
  }

  static tapMonitor() {
    return Observable.create(observer => {
      let i = 1;
      setInterval(() => {
        if (tapScript[i]) {
          observer.next(tapScript[i]);
        }
        i++;
        if (i == tapScript.length) {
          observer.complete();
        }
      }, 1000, tapScript.length);
    });
  }

  // attaching an observable to the tap for later disposal
  static openTap(tapId) {
    let updatingTap = _.find(taps, tap => {return tap.id == tapId;});
    if (!updatingTap) throw('there was an error');
    return Observable.create(observer => {
      let interval = setInterval(() => {
        if(updatingTap.clearAction) {
          updatingTap.clearAction = undefined;
          observer.complete();
          clearInterval(interval);
        }
        updatingTap.pouring = true;
        observer.next(
          {
            tapId, pouring: true, levelAdjustment: -.01
          }
        );
      }, 500);
    });
  }

  // detaching the observable on a tap
  static closeTap(tapId) {
    let updatingTap = _.find(taps, tap => {return tap.id == tapId;});
    updatingTap.clearAction = true;
    return Observable.of({tapId, pouring: false});
  }
}

export default TapApi;
