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
import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore();
store.dispatch(loadTaps());
store.dispatch(loadCoffee());
store.dispatch(loadLocation());
//store.dispatch(monitorTaps());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('app')
);



 /*
import React from 'react';
import {render} from 'react-dom';
import BasicPage from './components/Sample/BasicPage';
import SpinnerComponent from './components/Sample/SpinnerComponent';
import InputComponent from './components/Sample/InputComponent';

import './styles/styles.scss';
require('./favicon.ico');

const greeting = {text: 'Hello!'};


render(
  <BasicPage item={greeting} />, document.getElementById('app')
);


render(
  <SpinnerComponent />, document.getElementById('dumb')
);

render(
  <InputComponent />, document.getElementById('sampleInput')
);
*/
