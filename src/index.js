import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import firebase from 'firebase';
import firebaseConfig from './config/firebase';

import { App } from './containers';

import { Provider } from 'react-redux';
import store from './store';

import './styles/main.css';

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<Provider store={store}>
  <App/>
</Provider>, document.getElementById('root'));
registerServiceWorker();
