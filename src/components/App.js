import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as baseActions from '../modules/base';
import { HomePage, DailyPage, RegisterPage } from './Pages';
import { Dimmed } from './';
import { HeaderContainer, LoginModalContainer, DimmedContainer, HelperModalContainer } from '../containers';
import auth from '../helpers/firebase/auth';
import users from '../helpers/firebase/users';
import * as authActions from '../modules/auth';

class App extends Component {
  componentDidMount() {

    auth.onAuthStateChanged((firebaseuser) => {
      const { AuthActions } = this.props;
      if(firebaseuser) {
        AuthActions.checkLogin(true);
        console.log('로그인')
        users.findUserById(firebaseuser.uid).then((user) => {
          if(!user.exists()) {
            // 유저가 존재한다!
            users.createUserData(firebaseuser);
          }
        })
      } else {
        console.log('로그인이 안된 상태')
        AuthActions.checkLogin(false);
      }
    });
  }
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomePage}/>
          <Route path="/daily" component={DailyPage}/>
          <Route path="/register" component={RegisterPage}/>
          <LoginModalContainer/>
          <HelperModalContainer/>
          <DimmedContainer/>
        </div>
      </Router>
    );
  }
}

export default connect(
  (state) => ({

  }),
  (dispatch) => ({
    AuthActions: bindActionCreators(authActions, dispatch)
  })
)(App);
