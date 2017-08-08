import React, { Component } from 'react';
import ClickOutside from 'react-click-outside';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { LoginModal } from '../components';
import * as baseActions from '../modules/base';
import * as authActions from '../modules/auth';

class LoginModalContainer extends Component {
  componentDidMount() {
      window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnMount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }


  handleKeyDown = (e) => {
    const { visible } = this.props;
    if(e.keyCode === 27) {
      this.handleClose();
    }
  }
  handleClose = () => {
    const { visible, BaseActions, AuthActions } = this.props;
    if(!visible) return;
    BaseActions.setDimmedVisibility(false);
    AuthActions.toggleLoginModal();
  }

  handleClickOutside = evt => {
    this.handleClose()
  }

  handleChangeMode = () => {
    const { mode, AuthActions } = this.props;
    const conversion = mode === 'login' ? 'register' : 'login';
    AuthActions.setModalMode(conversion);
  }
  render() {
    const { visible, mode } = this.props;
    const { handleChangeMode } = this;
    return (
      <LoginModal
        visible={visible}
        mode={mode}
        onChangeMode={handleChangeMode}
      />
    );
  }

}

export default connect(
  (state) => ({
    visible: state.auth.getIn(['modal', 'visible']),
    mode: state.auth.getIn(['modal', 'mode'])
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch),
    AuthActions: bindActionCreators(authActions, dispatch)
  })
)(ClickOutside(LoginModalContainer));
