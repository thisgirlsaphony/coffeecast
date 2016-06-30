import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import {reduxObservable} from 'redux-observable';

const configureStore = (initialState) => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(reduxObservable())
  );
};

export default configureStore;
