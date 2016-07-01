import React, {PropTypes} from 'react';
/*
 var BasicPage = React.createClass({...})
 */
class InputComponent extends React.Component {
  constructor() {
    super();

    // setting initial state
    this.state = {
      person: {firstName: '', lastName: ''}
    };

    this.setPersonState = this.setPersonState.bind(this);
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

  setPersonState(event) {
    var field = event.target.name;
    var value = event.target.value;
    this.state.person[field] = value;
    return this.setState({person: this.state.person});
  }

  render() {
    return (
      <div className="container">
        <div className="form-group">
          <label>First Name</label>
          <input type="text" name="firstName" value={this.state.person.firstName} onChange={this.setPersonState} className="form-control"/>
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input type="text" name="lastName" value={this.state.person.lastName} onChange={this.setPersonState} className="form-control"/>
        </div>
        <div>
        </div>
      </div>
    )
  }
}

export default InputComponent;






