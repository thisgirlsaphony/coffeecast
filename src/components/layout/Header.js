import React from 'react';
import {IndexLink} from 'react-router';

const Header = () => {
  return (
      <div className="banner-flag-bar"><IndexLink to="/"><img className="banner-flag" src={require('../../images/banner.png')}></img></IndexLink></div>
  );
};

export default Header;
