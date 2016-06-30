import * as types from '../actions/actionTypes';
import initialState from './initialState';
import * as _ from 'lodash';

const tapReducer = (state = initialState.taps, action) => {
  switch (action.type) {
    case types.LOAD_TAP_SUCCESS:
      return action.taps;
    case types.UPDATE_TAP_STATUS:
    {
      const tapToUpdate = _.find(state, tap => {
        return tap.id == action.tapStatus.tapId;
      });
      return [
        ...state.filter(tap => tap.id != action.tapStatus.tapId), Object.assign({}, tapToUpdate, {pouring: action.tapStatus.isOpen})
      ];
    }
    default:
      return state;
  }
};

export default tapReducer;
