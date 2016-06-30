import React, {PropTypes} from 'react';

const Face = ({face, pouring}) => {
  return (
    <div className="face">
      <img src={pouring ? face.blink : face.eyes}/>
      <img className={pouring && 'mouth'} src={pouring ? face.whistle : face.mouth}/>
    </div>
  );
};

Face.propTypes = {
  face: PropTypes.object.isRequired,
  pouring: PropTypes.bool
};

export default Face;
