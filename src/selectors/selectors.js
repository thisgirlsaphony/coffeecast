import * as _ from 'lodash';

export const getLocationTapDetail = (location, taps, coffees) => {
  return location.taps.map(tapId => {
    let tap = _.head(_.filter(taps, tap => tap.id == tapId));
    return {
      level: tap.level,
      pouring: tap.pouring,
      coffee: _.head(_.filter(coffees, coffee => coffee.id == tap.coffeeId)),
      face: facePicker(tap.level)
    };
  });
};

export const getLocationById = (locations, locationId) => {
  return _.head(_.filter(locations, location => location.id === locationId));
};

export const facePicker = (level) => {
  let mouthImage;
  let eyeImage;
  if (level > 80) {
    eyeImage = require('../images/eyes1.png');
    mouthImage = require('../images/mouth2.png');
  } else if (level > 50) {
    eyeImage = require('../images/eyes1.png');
    mouthImage = require('../images/mouth4.png');
  } else {
    eyeImage = require('../images/eyes2.png');
    mouthImage = require('../images/mouth3.png');
  }
  return {
    eyes: eyeImage,
    blink: require('../images/eyes3.png'),
    mouth: mouthImage,
    whistle: require('../images/mouth1.png')
  };
};
