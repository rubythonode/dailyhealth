import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';

const SET_DIMMED_VISIBILITY = 'base/SET_DIMMED_VISIBILITY';

export const setDimmedVisibility = createAction(SET_DIMMED_VISIBILITY); // (visible)

const initialState = Map({
  dimmed: Map({
    visible: false
  })
});

export default handleActions({
  [SET_DIMMED_VISIBILITY]: (state, action) => {
    return state.setIn(['dimmed', 'visible'], action.payload);
  }
}, initialState);
