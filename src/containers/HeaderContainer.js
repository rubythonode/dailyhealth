import React, { Component } from 'react';
import { Header } from '../components';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from '../modules/base';
import * as authActions from '../modules/auth';

class HeaderContainer extends Component {

  handleLoginButtonClick = () => {
    const { BaseActions, AuthActions } = this.props;

    BaseActions.setDimmedVisibility(true);
    AuthActions.toggleLoginModal();
  }
  render() {
    const { handleLoginButtonClick } = this;
    return (
      <Header
        onLoginButtonClick={handleLoginButtonClick}
      />
    );
  }

}

export default connect(
  (state) => ({

  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch),
    AuthActions: bindActionCreators(authActions, dispatch)
  })
)(HeaderContainer);
