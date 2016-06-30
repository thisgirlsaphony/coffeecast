import React, {PropTypes} from 'react';
import Header from './layout/Header';
import TapControlPanel from './taps/TapControlPanel';

const App = (props) => {
  return (
    <div>
      <Header />
      {props.children}
      <TapControlPanel />
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
