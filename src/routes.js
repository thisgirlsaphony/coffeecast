import React from 'react';
import { Route, IndexRoute } from 'react-router';
import LocationsPage from './components/locations/LocationsPage';
import LocationPage from './components/locations/LocationPage';

//add in later
import TapPage from './components/taps/TapPage';

import App from './components/App';
import NotFoundPage from './components/NotFoundPage';

export default (
<Route path="/" component={App}>
  <IndexRoute component={LocationsPage}/>
  <Route path="/location/:id" component={LocationPage}/>
  // add in later
  <Route path="/tap/:id" component={TapPage}/>
  <Route path="*" component={NotFoundPage}/>
  </Route>
);
