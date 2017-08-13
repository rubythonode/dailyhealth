import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

const CHANGE_INPUT = 'auth/CHANGE_INPUT';
const CHANGE_USER_STSATUS = 'auth/CHANGE_USER_STSATUS';

export const changeInput = createAction(CHANGE_INPUT); // ({name, value})
export const changeUserStatus = createAction(CHANGE_USER_STSATUS); // (status)

const initialState = Map({
  form: Map({
    email: '',
    password: ''
  }),
  user: Map({
    status: true // 로그인 상태
  })
});

export default handleActions({
  [CHANGE_INPUT]: (state, action) => {
    const { name, value } = action.payload;
    return state.setIn(['form', name], value);
  },
  [CHANGE_USER_STSATUS]: (state, action) => {
    return state.setIn(['user', 'status'], action.payload);
  }
}, initialState)
