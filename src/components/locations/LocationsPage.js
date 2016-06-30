import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

class LocationsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {locations} = this.props.state;
    return (
      <ul className="list-group">
        {locations.map(location =>
          <li key={location.id} className="list-item">
            <Link to={'/location/' + location.id}>{location.name}</Link>
          </li>
        )}
      </ul>
    );
  }
}

LocationsPage.propTypes = {
  state: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    state: state
  };
};

export default connect(mapStateToProps)(LocationsPage);
