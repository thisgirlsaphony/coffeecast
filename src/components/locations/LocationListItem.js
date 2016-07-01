import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const LocationListItem = ({location}) => {
  return (
    <div className="panel panel-default location-tracker">
      <div className="panel-heading">
        <div className="location-tracker-row row">
          <div className="location-title col-md-3">
            <strong>
              <Link to={'/location/' + location.id}>{location.name}</Link>
            </strong>
          </div>
          <div className="col-md-6">
            {location.description}
          </div>
          <div className="col-md-3">{location.taps.length} taps</div>
        </div>
      </div>
      <div className="panel-body">
        {location.taps.map(tap =>
          <div key={'tap-' + tap.id} className="tap row">
            <div className="col-md-offset-1 col-md-3">{tap.coffee.name}</div>
            <div className="col-md-3">{(tap.level * 100).toFixed(2)}%</div>
          </div>
        )}
      </div>
    </div>
  );
};

LocationListItem.propTypes = {
  location: PropTypes.object.isRequired
};

export default LocationListItem;
