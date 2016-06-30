import React, {PropTypes} from 'react';
import Face from './Face';

const CoffeeTap = ({tap}) => {
  return (
    <div className="tap-item">
      <div className="coffee-label">
        <Face className="face" face={tap.face} level={tap.level} pouring={tap.pouring} />
        <h3>{tap.coffee.name}</h3>
        <small>{tap.coffee.roaster}</small>
        <p>{tap.coffee.type}</p>
        <div className="label-filler"><img src={require('../../images/frame.png')}></img></div>
      </div>
      <div className="tap-filler" style={{top: (100 - +tap.level) * 6 + 'px'}}><img src={require('../../images/backdrop.png')}></img></div>
    </div>
  );
};

CoffeeTap.propTypes = {
  tap: PropTypes.shape({
    coffee: PropTypes.shape({
      id: PropTypes.number,
      roaster: PropTypes.string,
      name: PropTypes.string,
      type: PropTypes.string,
      color: PropTypes.string
    }).isRequired,
    pouring: PropTypes.bool.isRequired,
    level: PropTypes.number.isRequired,
    face: PropTypes.object.isRequired
  })
};

export default CoffeeTap;
