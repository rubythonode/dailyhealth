import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';

const TOGGLE_LOGIN_MODAL = 'auth/TOGGLE_LOGIN_MODAL';
const SET_MODAL_MODE = 'auth/SET_MODAL_MODE';
const CHANGE_INPUT = 'auth/CHANGE_INPUT';
const CHECK_LOGIN = 'auth/CHECK_LOGIN';
const CHANGE_DISPLAYNAME = 'auth/CHANGE_DISPLAYNAME';
const PETCH_USER_UID = 'auth/PETCH_USER_UID';
const PETCH_USER_INFOMATION = 'auth/PETCH_USER_INFOMATION';

export const toggleLoginModal = createAction(TOGGLE_LOGIN_MODAL);
export const setModalMode = createAction(SET_MODAL_MODE); // (mode)
export const changeInput = createAction(CHANGE_INPUT); // ({name, value})
export const checkLogin = createAction(CHECK_LOGIN);
export const changeDisplayName = createAction(CHANGE_DISPLAYNAME);
export const petchUserUid = createAction(PETCH_USER_UID);
export const petchUserInfomation = createAction(PETCH_USER_INFOMATION);

const initialState = Map({
  modal: Map({
    visible: false,
    mode: 'login'
  }),
  form: Map({
    email: '',
    password: ''
  }),
  auth: Map({
    login: true
  }),
  displayname: '',
  uid: '',
  user: Map({
    displayname: ''
  })
});

export default handleActions({
  [TOGGLE_LOGIN_MODAL]: (state, action) => {
    return state.updateIn(['modal', 'visible'], visible => !visible);
  },
  [SET_MODAL_MODE]: (state, action) => {
    return state.setIn(['modal', 'mode'], action.payload);
  },
  [CHANGE_INPUT]: (state, action) => {
    const { name, value } = action.payload;
    return state.setIn(['form', name], value);
  },
  [CHECK_LOGIN]: (state, action) => {
    return state.setIn(['auth', 'login'], action.payload);
  },
  [CHANGE_DISPLAYNAME]: (state, action) => {
    return state.set('displayname', action.payload);
  },
  [PETCH_USER_UID]: (state, action) => {
    return state.set('uid', action.payload);
  },
  [PETCH_USER_INFOMATION]: (state, action) => {
    return state.set('user', Map({
      displayname: action.payload.displayname
    }));
  }
}, initialState)
