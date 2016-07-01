import delay from './delay';
import {Observable} from 'rxjs';
import * as _ from 'lodash';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.

const taps = [
  {
    id: 1,
    coffeeId: 1,
    level: 0.75,
    pouring: false
  },
  {
    id: 2,
    coffeeId: 2,
    level: 0.40,
    pouring: false
  },
  {
    id: 3,
    coffeeId: 1,
    level: 0.90,
    pouring: false
  },
  {
    id: 4,
    coffeeId: 3,
    level: 1.00,
    pouring: false
  },
  {
    id: 5,
    coffeeId: 1,
    level: 0.20,
    pouring: false
  },
  {
    id: 6,
    coffeeId: 4,
    level: 0.60,
    pouring: false
  }
];


const tapScript = [
  {
    id: 1,
    pouring: true,
    adjustment: 0
  },
  {
    id: 1,
    pouring: true,
    adjustment: 0
  },
  {
    id: 1,
    pouring: true,
    adjustment: -0.5
  },
  {
    id: 1,
    pouring: true,
    adjustment: -0.5
  },
  {
    id: 1,
    pouring: true,
    adjustment: -0.5
  },
  {
    id: 1,
    pouring: false,
    adjustment: -0.5
  }
];

const openTaps = [];

const betweenZeroAndOne = (testVal) => {
  return (testVal <= 0) ? 0 : (testVal >= 1) ? 1 : testVal;
};

class TapApi {
  static getAllTaps() {
    return Observable.of(Object.assign([], taps)).delay(delay);
  }

  static tapMonitor() {
    return Observable.create(observer => {
      let i = 1;
      setInterval(() => {
        let tapToAdjust = _.find(taps, (tap) => {
          return tap.id == tapScript[i].id;
        });
        if (tapToAdjust) {
          if (tapToAdjust.level == 0) {
            throw('Tap:' + tapToAdjust.id + ' is all out of coffee');
          }
          tapToAdjust.pouring = tapScript[i].pouring;
          tapToAdjust.level = betweenZeroAndOne(tapToAdjust.level + tapScript[i].adjustment);
          observer.next(tapToAdjust);
        }

        i++;

        if (i == tapScript.length) {
          observer.complete();
        }
      }, delay, tapScript.length);
    });
  }

  // attaching an observable to the tap for later disposal
  static openTap(tapId) {
    let updatingTap = _.find(taps, tap => {
      return tap.id == tapId;
    });
    if (!_.includes(openTaps, updatingTap)) openTaps.push(updatingTap);
    if (!updatingTap) throw('Where did you even find this tap?');
    return Observable.create(observer => {
      let interval = setInterval(() => {
        if (!_.includes(openTaps, updatingTap)) {
          observer.complete();
          clearInterval(interval);
        }
        if (updatingTap.level == 0) {
          updatingTap.pouring = false;
          observer.next(updatingTap);
          clearInterval(interval);
          observer.complete();
        }
        updatingTap.pouring = true;
        updatingTap.level = betweenZeroAndOne(updatingTap.level - 0.05);
        observer.next(updatingTap);
      }, delay);
    });
  }

  // detaching the observable on a tap
  static closeTap(tapId) {
    let updatingTap = _.find(openTaps, tap => {
      return tap.id == tapId;
    });
    if (!updatingTap) return Observable.of({id:tapId, pouring: false});
    updatingTap.pouring = false;
    openTaps.splice([].indexOf(openTaps, updatingTap));
    return Observable.of(updatingTap);

  }
}

export default TapApi;
