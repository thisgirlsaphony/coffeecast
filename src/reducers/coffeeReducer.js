import * as types from '../actions/actionTypes';
import initialState from './initialState';

const coffeeReducer = (state = initialState.coffees, action) => {
  switch(action.type) {
    case types.LOAD_COFFEE_SUCCESS:
          return [...action.coffees];

    default:
          return state;
  }
};

export default coffeeReducer;
