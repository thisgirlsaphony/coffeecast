import CoffeeApi from '../api/mockCoffeeApi';
import * as types from './actionTypes';
import handleError from '../handlers/errorHandler';

const loadCoffeeSuccess = (coffees) => ({type: types.LOAD_COFFEE_SUCCESS, coffees});

export const loadCoffee = () => (() => CoffeeApi.getAllCoffees().map(
    coffees => loadCoffeeSuccess(coffees),
    err => handleError(err))
);


export default loadCoffeeSuccess;
