import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import LocationListItem from './LocationListItem';
import {getLocationTapDetail} from '../../selectors/selectors';

class LocationsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {locations} = this.props;
    return (
      <div className="container">
          {locations.map(location =>
            <LocationListItem key={location.id} location={location}/>
          )}
      </div>
    );
  }
}

LocationsPage.propTypes = {
  locations: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  let mappedLocations = state.locations.map(location => Object.assign({}, location, {taps: getLocationTapDetail(location, state.taps, state.coffees)}));
  return {
    locations: mappedLocations
  };
};

export default connect(mapStateToProps)(LocationsPage);
