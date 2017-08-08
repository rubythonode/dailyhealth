import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { App } from './components';
/* 스타일 초기화 */
import './styles/reset.css';

/* 스토어 */
import store from './store';

/* 파이어베이스 */
import firebase from 'firebase';
import firebaseConfig from './config/firebase';

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
document.getElementById('root'));
