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
import PropTypes from "prop-types";
class App extends Component {

  componentDidMount() {
    const { AuthActions } = this.props;

    auth.onAuthStateChanged((firebaseuser) => {
      if(firebaseuser) {
        AuthActions.checkLogin(true);
        const { uid, email } = firebaseuser;

        users.findUserById(firebaseuser.uid).then((user) => {
          if(!user.exists()) {
            // 유저가 존재한다!
            users.createUserData(firebaseuser);

          }
          AuthActions.petchUserUid(uid);
          if(user.val().displayname == "") {

          }
          // AuthActions.petchUserInfomation(user.val());


        })
      } else {
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
