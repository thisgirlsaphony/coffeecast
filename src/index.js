/* eslint-disable import/default */
import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
import {loadTaps} from './actions/tapActions';
import {loadCoffee} from './actions/coffeeActions';
import {loadLocation} from './actions/locationActions';
import './styles/styles.scss';
require('./favicon.ico'); // Tell webpack to load favicon.ico

const store = configureStore();
store.dispatch(loadTaps());
store.dispatch(loadCoffee());
store.dispatch(loadLocation());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('app')
);
