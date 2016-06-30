import delay from './delay';
import * as _ from 'lodash';
import {Observable} from 'rxjs';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.

const coffees = [
  {
    id: 1,
    roaster: 'Metropolis Coffee',
    name: 'Redline Espresso',
    type: 'Espresso Blend',
    origin: 'multiple',
    color: 'red'
  },
  {
    id: 2,
    roaster: 'Stumptown Coffee Roasters',
    name: 'Karogoto AA',
    type: 'Single-Origin',
    origin: 'Kenya, Karogoto Factory',
    color: 'orange'
  },
  {
    id: 3,
    roaster: 'The Wandering Goat Coffee Co.',
    name: 'Chupacabra',
    type: 'Espresso Blend',
    origin: 'unknown',
    color: 'blue'
  },
  {
    id: 4,
    roaster: 'Dark Horse Coffee Roasters',
    name: 'Felipe Tello Laura',
    type: 'Blend',
    origin: 'Peru',
    color: 'green'
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (coffee) => {
  coffee.id = _.max(coffees.map(item => item.id)) + 1;
};

class CoffeeApi {
  static getAllCoffees() {
    return Observable.of(Object.assign([], coffees)).delay(delay);
  }

  static saveCoffee(coffee) {
    return Observable.create(observer => {
      setTimeout(() => {
        const minCoffeeNameLength = 3;
        if (coffee.name.length < minCoffeeNameLength) {
          Observable.throw(new Error(`Name must be at least ${minCoffeeNameLength} characters.`));
        }
        if (coffee.id) {
          const existingCoffeeIndex = coffees.findIndex(a => a.id == coffee.id);
          coffee.splice(existingCoffeeIndex, 1, coffee);
        } else {
          coffee.id = generateId(coffee);
          coffees.push(coffee);
        }

        observer.next(Object.assign({}, coffee));
        observer.complete();
      }, delay);
    });
  }

  static deleteCoffee(coffeeId) {
    return Observable.create(observer => {
      setTimeout(() => {
        const indexOfCoffeeToDelete = coffees.findIndex(coffee => {
          coffee.id == coffeeId;
        });
        coffees.splice(indexOfCoffeeToDelete, 1);
        observer.complete();
      }, delay);
    });
  }
}

export default CoffeeApi;
