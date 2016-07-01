import React from 'react';
/*
 var BasicPage = React.createClass({...})
 */
class SpinnerComponent extends React.Component {
  constructor() {
    super();

    // setting initial state
    this.state = {
      spinnerStatus: true
    };

    this.toggleSpinner = this.toggleSpinner.bind(this);
  }

  toggleSpinner(spinnerStatus) {
    this.setState({spinnerStatus: !spinnerStatus});
  }
  /*
  componentWillMount(){} // can do api calls here to update the state to include dynamic data
  componentDidMount(){}
  componentWillReceiveProps(){}
  shouldComponentUpdate(){} // performance! might not need to re-render
  componentWillUpdate(){}
  componentDidUpdate(){}
  componentWillUnmount(){} /garbage collection
  */

  render() {
    return (
      <div className="container">
        <button className="btn btn-default" onClick={() => this.toggleSpinner(this.state.spinnerStatus)}>
          {this.state.spinnerStatus
            ? <i className="fa fa-cog fa-spin fa-lg fa-fw"></i>
            : 'not spinning!'}
        </button>
      </div>
    );
  }
}

export default SpinnerComponent;
