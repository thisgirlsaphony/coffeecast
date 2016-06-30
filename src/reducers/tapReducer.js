import * as types from '../actions/actionTypes';
import initialState from './initialState';
import * as _ from 'lodash';

const tapReducer = (state = initialState.taps, action) => {
  switch (action.type) {
    case types.LOAD_TAP_SUCCESS:
      return [...action.taps];

    case types.UPDATE_TAP_STATUS:
    {
      const tapToUpdate = _.find(state, tap => {
        return tap.id == action.tapStatus.tapId;
      });
      const adj = action.tapStatus.levelAdjustment ? tapToUpdate.level + action.tapStatus.levelAdjustment : tapToUpdate.level;
      const tapMergeValues = {
        pouring: action.tapStatus.pouring,
        level: adj < 0 ? 0 : adj
      };
      let newState = [...state];
      newState.splice(state.indexOf(tapToUpdate), 1, Object.assign({}, tapToUpdate, tapMergeValues));
      return newState;
    }

    default:
      return state;
  }
};

export default tapReducer;
