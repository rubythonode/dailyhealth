import React, { Component } from 'react';
import { Header } from '../components';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from '../modules/base';
import * as authActions from '../modules/auth';
import auth from '../helpers/firebase/auth';
import alertify from 'alertifyjs';

class HeaderContainer extends Component {

  handleLoginButtonClick = () => {
    const { BaseActions, AuthActions } = this.props;

    BaseActions.setDimmedVisibility(true);
    AuthActions.toggleLoginModal();
  }

  handleLogout() {
    auth.logout();
    alertify.success('로그아웃에 성공했어요!');
  }
  render() {
    const { login } = this.props;
    const { handleLoginButtonClick, handleLogout } = this;
    return (
      <Header
        login={login}
        onLoginButtonClick={handleLoginButtonClick}
        onLogout={handleLogout}
      />
    );
  }

}

export default connect(
  (state) => ({
    login: state.auth.getIn(['auth', 'login'])
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch),
    AuthActions: bindActionCreators(authActions, dispatch)
  })
)(HeaderContainer);
