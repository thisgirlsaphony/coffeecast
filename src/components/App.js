import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const App = (props) => {
  return (
    <div>
      <IndexLink to="/">Home</IndexLink>
      {' | '}
      <Link to="/fake">Fake Page</Link>
      {' | '}
      <Link to="/locations">Locations</Link>
      <br/>
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
