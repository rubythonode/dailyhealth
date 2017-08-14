import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';
import users from '../../api/users';

const CHANGE_INPUT = 'auth/CHANGE_INPUT';
const CHANGE_USER_STSATUS = 'auth/CHANGE_USER_STSATUS';
const CHAGEN_LOGIN_STATUS = 'auth/CHAGEN_LOGIN_STATUS';
const CHANGE_DISPLAYNAME = 'auth/CHANGE_DISPLAYNAME';
const SET_USER_COLOR = 'auth/SET_USER/COLOR';
const INITIAL_USER_INFOMATION = 'auth/INITIAL_USER_INFOMATION';
const INITIAL_EMAIL_DISPLAYNAME = 'auth/INITIAL_EMAIL_DISPLAYNAME';

export const changeInput = createAction(CHANGE_INPUT); // ({name, value})
export const changeUserStatus = createAction(CHANGE_USER_STSATUS); // (status)
export const changeLoginStatus = createAction(CHAGEN_LOGIN_STATUS); // (status)
export const changeDisplayName = createAction(CHANGE_DISPLAYNAME); // (displayname)
export const setUserColor = createAction(SET_USER_COLOR); // (color)
export const initialUserInfomation = createAction(INITIAL_USER_INFOMATION); // {}
export const initialEmailDisplayname = createAction(INITIAL_EMAIL_DISPLAYNAME); // (email, displayname)

const initialState = Map({
  form: Map({
    email: '',
    password: '',
    displayname: ''
  }),
  user: Map({
    status: true, // 로그인 상태
    uid: '',
    color: ''
  }),
  login: Map({
    status: false,
    displayname: ''
  }),
  userInfomation: Map({})
});

export default handleActions({
  [CHANGE_INPUT]: (state, action) => {
    const { name, value } = action.payload;
    return state.setIn(['form', name], value);
  },
  [CHANGE_USER_STSATUS]: (state, action) => {
    const { status, uid } = action.payload
    return state.setIn(['user', 'status'], status).setIn(['user', 'uid'], uid);
  },
  [CHAGEN_LOGIN_STATUS]: (state, action) => {
    return state.setIn(['login', 'status'], action.payload);
  },
  [CHANGE_DISPLAYNAME]: (state, action) => {
    return state.setIn(['login', 'displayname'], action.payload);
  },
  [SET_USER_COLOR]: (state, action) => {
    return state.setIn(['user', 'color'], action.payload);
  },
  [INITIAL_USER_INFOMATION]: (state, action) => {
    return state.set('userInfomation', action.payload);
  },
  [INITIAL_EMAIL_DISPLAYNAME]: (state, action) => {
    const { email, displayName } = action.payload;
    return state.setIn(['form', 'email'], email).setIn(['form', 'displayname'], displayName);
  }
}, initialState)
