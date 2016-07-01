import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getLocationById, getLocationTapDetail} from '../../selectors/selectors';
import CoffeeTap from './CoffeeTap';
import * as actions from '../../actions/tapActions';

class LocationPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {taps} = this.props;
    return (
      <div>
        {taps.map((tap) =>
          <CoffeeTap key={tap.id} tap={tap} />
        )}
      </div>
    );
  }
}

LocationPage.propTypes = {
  location: PropTypes.object.isRequired,
  taps: PropTypes.arrayOf(PropTypes.object),
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  const locationId = ownProps.params.id;
  let location = {
    id: 0, name: '', description: '', taps: []
  };

  if (locationId && state.locations.length > 0) {
    location = getLocationById(state.locations, locationId);
  }

  return {
    location,
    taps: getLocationTapDetail(location, state.taps, state.coffees)
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationPage);
