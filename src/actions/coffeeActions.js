import CoffeeApi from '../api/mockCoffeeApi';
import * as types from './actionTypes';

const loadCoffeeSuccess = (coffees) => ({type: types.LOAD_COFFEE_SUCCESS, coffees});

export const loadCoffee = () => (() => CoffeeApi.getAllCoffees().map(
    coffees => loadCoffeeSuccess(coffees)));


export default loadCoffeeSuccess;
