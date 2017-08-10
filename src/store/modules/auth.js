import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

const CHANGE_INPUT = 'auth/CHANGE_INPUT';

export const changeInput = createAction(CHANGE_INPUT); // ({name, value})


const initialState = Map({
  form: Map({
    email: '',
    password: ''
  })
});

export default handleActions({
  [CHANGE_INPUT]: (state, action) => {
    const { name, value } = action.payload;
    return state.setIn(['form', name], value);
  }
}, initialState)
