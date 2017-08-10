import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

/* 엔트리 */
import { App } from './components';
import './index.css';
/* 스토어 */
import store from './store';
/* 파이어베이스 */
import firebase from 'firebase';
import firebaseConfig from './config/firebase';
/* alertify */
import alertify from 'alertifyjs';
/* react-mdl */
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
/* alertify 설정 */
alertify.set('notifier','position', 'top-right');
/* 파이어베이스 설정 */
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
document.getElementById('root'));
