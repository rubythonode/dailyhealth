import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';

const SET_DIMMED_VISIBILITY = 'base/SET_DIMMED_VISIBILITY';
const SET_HELPER_MODAL_VISIBILITY = 'base/SET_HELPER_MODAL_VISIBILITY';

export const setDimmedVisibility = createAction(SET_DIMMED_VISIBILITY); // (visible)
export const setHelperModalVisibility = createAction(SET_HELPER_MODAL_VISIBILITY) // (visible)

const initialState = Map({
  dimmed: Map({
    visible: false
  }),
  helperModal: Map({
    visible: false,
    email: ''
  })
});

export default handleActions({
  [SET_DIMMED_VISIBILITY]: (state, action) => {
    return state.setIn(['dimmed', 'visible'], action.payload);
  },
  [SET_HELPER_MODAL_VISIBILITY]: (state, action) => {
    const { visible, email } = action.payload;
    return state.setIn(['helperModal', 'visible'], visible).setIn(['helperModal', 'email'], email);
  }
}, initialState);
