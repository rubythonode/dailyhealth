import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';

const SET_DIMMED_VISIBILITY = 'base/SET_DIMMED_VISIBILITY';
const SET_MODAL_VISIBILITY = 'base/SET_MODAL_VISIBILITY';
const SET_TOGGLE_USER_TASK = 'base/SET_TOGGLE_USER_TASK';

export const setDimmedVisibility = createAction(SET_DIMMED_VISIBILITY); // (visible)
export const setModalVisibility = createAction(SET_MODAL_VISIBILITY); // (visible)
export const setToggleUserTask = createAction(SET_TOGGLE_USER_TASK); // (task)

const initialState = Map({
  dimmed: Map({
    visible: false
  }),
  loginmodal: Map({
    visible: false,
    task: 'login'
  }),

});

export default handleActions({
  [SET_DIMMED_VISIBILITY]: (state, action) => {
    return state.setIn(['dimmed', 'visible'], action.payload);
  },
  [SET_MODAL_VISIBILITY]: (state, action) => {
    return state.setIn(['loginmodal', 'visible'], action.payload);
  },
  [SET_TOGGLE_USER_TASK]: (state, action) => {
    return state.setIn(['loginmodal', 'task'], action.payload);
  }
}, initialState);
