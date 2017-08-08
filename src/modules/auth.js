import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';

const TOGGLE_LOGIN_MODAL = 'auth/TOGGLE_LOGIN_MODAL';
const SET_MODAL_MODE = 'auth/SET_MODAL_MODE';

export const toggleLoginModal = createAction(TOGGLE_LOGIN_MODAL);
export const setModalMode = createAction(SET_MODAL_MODE);

const initialState = Map({
  modal: Map({
    visible: false,
    mode: 'login'
  })
});

export default handleActions({
  [TOGGLE_LOGIN_MODAL]: (state, action) => {
    return state.updateIn(['modal', 'visible'], visible => !visible);
  },
  [SET_MODAL_MODE]: (state, action) => {
    return state.setIn(['modal', 'mode'], action.payload);
  }
}, initialState)
