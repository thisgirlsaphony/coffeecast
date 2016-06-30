import React, {PropTypes} from 'react';

class FakePage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
          <h1>Fake!</h1>
        );
    }
}

FakePage.propTypes = {
  thing: PropTypes.string
};

export default FakePage;
