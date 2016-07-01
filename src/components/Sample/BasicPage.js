import React, {PropTypes} from 'react';
/*
 var BasicPage = React.createClass({...})
 */
class BasicPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>
            {this.props.item.text}
          </h1>
          <p>boy am I glad that worked!</p>
        </div>
      </div>
    );
  }
}

BasicPage.propTypes = {
  item: PropTypes.object.isRequired
};

export default BasicPage;




