import React, { Component } from 'react';
import { LoginModal } from '../components';
import PropTypes from 'prop-types';

class LoginModalContainer extends Component {

  render() {
    const {
      modalVisible,
      onTask,
      task,
      onAuth,
      onChangeInput,
      onGoogleLogin,
      onFacebookLogin
    } = this.props;
    return (
      <LoginModal
        modalVisible={modalVisible}
        onTask={onTask}
        task={task}
        onAuth={onAuth}
        onChangeInput={onChangeInput}
        onGoogleLogin={onGoogleLogin}
        onFacebookLogin={onFacebookLogin}
        />
    );
  }
}

LoginModalContainer.PropTypes = {
  modalVisible: PropTypes.bol,
  onTask: PropTypes.func,
  onAuth: PropTypes.func,
  onChangeInput: PropTypes.func,
  onGoogleLogin: PropTypes.func,
  onFacebookLogin: PropTypes.func,
  task: PropTypes.string
}

LoginModalContainer.defaultProps = {
  modalVisible: false,
  task: '',
  onTask: () => { console.error('onTask not defined') },
  onAuth: () => { console.error('onAuth not defined') },
  onChangeInput: () => { console.error('onChangeInput not defined') },
  onGoogleLogin: () => { console.error('onGoogleLogin not defined') },
  onFacebookLogin: () => { console.error('onFacebookLogin not defined') }
}

export default LoginModalContainer;
