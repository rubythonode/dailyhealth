import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';

const SET_DIMMED_VISIBILITY = 'base/SET_DIMMED_VISIBILITY';
const SET_MODAL_VISIBILITY = 'base/SET_MODAL_VISIBILITY';
const SET_TOGGLE_USER_TASK = 'base/SET_TOGGLE_USER_TASK';
const SET_ACCOUNT_EXIST_MODAL_VISIBILITY = 'bas/SET_ACCOUNT_EXIST_MODAL_VISIBILITY';

export const setDimmedVisibility = createAction(SET_DIMMED_VISIBILITY); // (visible)
export const setModalVisibility = createAction(SET_MODAL_VISIBILITY); // (visible)
export const setToggleUserTask = createAction(SET_TOGGLE_USER_TASK); // (task)
export const setAccountExistModalVisibility = createAction(SET_ACCOUNT_EXIST_MODAL_VISIBILITY); // (visible)

const initialState = Map({
  dimmed: Map({
    visible: false
  }),
  loginmodal: Map({
    visible: false,
    task: 'login'
  }),
  accountexistmodal: Map({
    visible: false,
    email: ''
  })
});

export default handleActions({
  [SET_DIMMED_VISIBILITY]: (state, action) => {
    return state.setIn(['dimmed', 'visible'], action.payload);
  },
  [SET_MODAL_VISIBILITY]: (state, action) => {
    return state.setIn(['loginmodal', 'visible'], action.payload);
  },
  [SET_ACCOUNT_EXIST_MODAL_VISIBILITY]: (state, action) => {
    const { visible, email } = action.payload;
    return state.setIn(['accountexistmodal', 'visible'], visible).setIn(['accountexistmodal', 'email'], email);
  },
  [SET_TOGGLE_USER_TASK]: (state, action) => {
    return state.setIn(['loginmodal', 'task'], action.payload);
  }
}, initialState);
