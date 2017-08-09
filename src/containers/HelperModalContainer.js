import React, { Component } from 'react';
import { HelperModal } from '../components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from '../modules/base';
import * as authActions from '../modules/auth';
import ClickOutside from 'react-click-outside';
import alertify from 'alertifyjs';

import auth from '../helpers/firebase/auth';

class HelperModalContainer extends Component {
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
    BaseActions.setHelperModalVisibility({
      'visible': false
    });
  }

  handleClickOutside = () => {
    this.handleClose();
  }

  handleConnect = () => {
    const { email } = this.props;
    auth.link(email).then((result) => {
      console.log(result);
    })
  }

  handleNotConnect = () => {
    this.handleClose();
    alertify.error('가입이 취소되었어요!');
  }

  render() {
    const { visible } = this.props;
    const {
      handleNotConnect,
      handleConnect
    } = this;

    return (
      <HelperModal
        visible={visible}
        onNotConnect={handleNotConnect}
        onConnect={handleConnect}
        />
    );
  }

}

export default connect(
  (state) => ({
    visible: state.base.getIn(['helperModal', 'visible']),
    email: state.base.getIn(['helperModal', 'email'])
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch),
    AuthActions: bindActionCreators(authActions, dispatch)
  })
)(ClickOutside(HelperModalContainer));
