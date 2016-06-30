import React from 'react';
import { IndexLink } from 'react-router';

const Header  = () => {
  return (
    <nav className="navbar navbar-default hover-display">
      <div className="container-fluid">
        <div className="navbar-header">
          <IndexLink className="navbar-brand" to="/"><i className="fa fa-bookmark-o" /> &nbsp; Locations</IndexLink>
        </div>
        <div className="navbar-left">
          <ul className="nav navbar-nav">
            <li>
            </li>
          </ul>
          </div>
      </div>
    </nav>
  );
};

export default Header;
