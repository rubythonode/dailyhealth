import { handleActions } from 'redux-actions';
import { Map } from 'immutable';

const initialState = Map({
  test: true
});

export default handleActions({

}, initialState);
