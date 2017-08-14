import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';

const SET_DIMMED_VISIBILITY = 'base/SET_DIMMED_VISIBILITY';
const SET_MODAL_VISIBILITY = 'base/SET_MODAL_VISIBILITY';
const SET_TOGGLE_USER_TASK = 'base/SET_TOGGLE_USER_TASK';
const SET_ACCOUNT_EXIST_MODAL_VISIBILITY = 'bas/SET_ACCOUNT_EXIST_MODAL_VISIBILITY';
const SET_SLIDER_NAV_VISIBILITY = 'base/SET_SLIDER_NAV_VISIBILITY';
const SET_MYPAGE_VISIBILITY = 'base/SET_MYPAGE_VISIBILITY';

export const setDimmedVisibility = createAction(SET_DIMMED_VISIBILITY); // (visible)
export const setModalVisibility = createAction(SET_MODAL_VISIBILITY); // (visible)
export const setToggleUserTask = createAction(SET_TOGGLE_USER_TASK); // (task)
export const setAccountExistModalVisibility = createAction(SET_ACCOUNT_EXIST_MODAL_VISIBILITY); // (visible)
export const setSliderNavVisibility = createAction(SET_SLIDER_NAV_VISIBILITY); // (visible)
export const setMypageVisibility = createAction(SET_MYPAGE_VISIBILITY); // (visible)

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
  }),
  slidernav: Map({
    visible: false
  }),
  mypage: Map({
    visible: 'account' // account or statistics
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
  },
  [SET_SLIDER_NAV_VISIBILITY]: (state, action) => {
    return state.setIn(['slidernav', 'visible'], action.payload);
  },
  [SET_MYPAGE_VISIBILITY]: (state, action) => {
    return state.setIn(['mypage', 'visible'], action.payload);
  }
}, initialState);
