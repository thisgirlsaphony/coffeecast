import React from 'react';
import { Route, IndexRoute } from 'react-router';
import LocationsPage from './components/locations/LocationsPage';
import LocationPage from './components/locations/LocationPage';

import App from './components/App';
import NotFoundPage from './components/NotFoundPage';
import HomePage from './components/HomePage';
import FakePage from './components/FakePage';

export default (
<Route path="/" component={App}>
  <IndexRoute component={HomePage}/>
  <Route path="/fake" component={FakePage}/>
  <Route path="/locations" component={LocationsPage}/>
  <Route path="/location/:id" component={LocationPage}/>
  <Route path="*" component={NotFoundPage}/>
  </Route>
);
