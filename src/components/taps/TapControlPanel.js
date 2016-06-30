import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/tapActions';

class TapControlPanel extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.toggleTap = this.toggleTap.bind(this);
  }

  toggleTap(tap) {
    if(tap.pouring) {
      this.props.actions.closeTap(tap.id);
    }  else {
      this.props.actions.openTap(tap.id);
    }
  }

  render() {
    const {taps} = this.props;
    return (
      <div className="tap-control-panel hover-display">
          {taps.map((tap) =>
            <button key={tap.id} onClick={() => this.toggleTap(tap)} className={tap.pouring ? 'btn btn-success' : 'btn btn-default'}  >{tap.id}</button>
          )}
      </div>
    );
  }
}

TapControlPanel.propTypes = {
  taps: PropTypes.arrayOf(PropTypes.object),
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    taps: state.taps
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TapControlPanel);
