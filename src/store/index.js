import { createStore, compose } from 'redux';

import modules from './modules';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(modules, composeEnhancers());

export default store;
