import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import actions from '../../actions/tapActions';

// add in

class TapPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {taps} = this.props;
    return (
      <div>{taps.map(tap => <div key={tap.id}>{tap.id}</div>)}</div>
    );
  }
}

TapPage.propTypes = {
  taps: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  return {
    taps: state.taps
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: bindActionCreators(dispatch, actions)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TapPage);
