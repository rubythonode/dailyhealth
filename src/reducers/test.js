import { handleActions } from 'redux-actions';
import { Map } from 'immutable';

const initialState = Map({
  test: false
});

export default handleActions({

}, initialState);
