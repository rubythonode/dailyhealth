import React, { Component } from 'react';
import ClickOutside from 'react-click-outside';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import alertify from 'alertifyjs';
import { LoginModal } from '../components';
import * as baseActions from '../modules/base';
import * as authActions from '../modules/auth';

import auth from '../helpers/firebase/auth';

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
    AuthActions.setModalMode('login');
  }

  handleClickOutside = evt => {
    this.handleClose();
  }

  handleChangeMode = () => {
    const { mode, AuthActions } = this.props;
    const conversion = mode === 'login' ? 'register' : 'login';
    AuthActions.setModalMode(conversion);
  }

  handleChangeModePassword = () => {
    const { AuthActions } = this.props;
    AuthActions.setModalMode('password');
  }

  handleChangeInput = (e) => {
    const { AuthActions, mode } =  this.props;
    const { name, value } = e.target;

    AuthActions.changeInput({name, value});
  }

  handleAuth = () => {
    const { infomation, mode } = this.props;
    const { email, password } = infomation;

    if(mode === 'login') {


      const provider = auth.signInWithEmailAndPassword(email, password);

      provider.then((user) => {
        if(user.uid) {
          alertify.success('로그인에 성공했어요!');
        }
      }).catch((error) => {
        switch(error.code) {
					case 'auth/invalid-email':
						alertify.error('잘못된 이메일 형식입니다!');
						break;
					case 'auth/user-not-found':
						alertify.error('존재하지 않은 이메일이예요!');
						break;
					case 'auth/wrong-password':
						alertify.error('비밀번호가 잘못되었거나 맞지 않아요!');
						break;
				}
      })
    } else {
      const provider = auth.createUserWithEmailAndPassword(email, password);

      provider.then((user) => {
        if(user.uid) {
          alertify.success('로그인에 성공했어요!');
        }
      }).catch((error) => {
        switch(error.code) {
          case 'auth/invalid-email':
            alertify.error('잘못된 이메일 형식입니다!');
            break;
          case 'auth/weak-password':
            alertify.error('비밀번호는 최소 6글자입니다!');
            break;
          case 'auth/wrong-password':
            alertify.error('비밀번호 형식이 잘못되었어요!');
            break;
          case 'auth/email-already-in-use':
            alertify.error('이미 존재하는 이메일이예요!');
						break;
        }
      })
    }

  }

  handleGoogle = () => {
    const provider = auth.google();

    provider.then((result) => {
      const token = result.credential.accessToken;
      const user = result.user;
      console.log(user);
    }).catch(function(error) {

      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      console.log(errorCode);
      const credential = error.credential;

    });
  }

  handleFacebook = () => {
      const provider = auth.facebook();

      provider.then((result) => {
        const token = result.credential.accessToken;
        const user = result.user;
        console.log(result);
      }).catch(function(error) {

        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
        console.log(error);
      });
  }

  render() {
    const { visible, mode } = this.props;

    const {
      handleChangeMode,
      handleChangeModePassword,
      handleChangeInput,
      handleAuth,
      handleGoogle,
      handleFacebook
    } = this;

    return (
      <LoginModal
        visible={visible}
        mode={mode}
        onChangeMode={handleChangeMode}
        onChangeModePassword={handleChangeModePassword}
        onChangeInput={handleChangeInput}
        onAuth={handleAuth}
        onGoogle={handleGoogle}
        onFacebook={handleFacebook}
      />
    );
  }


}

export default connect(
  (state) => ({
    visible: state.auth.getIn(['modal', 'visible']),
    mode: state.auth.getIn(['modal', 'mode']),
    infomation: state.auth.get('form').toJS()
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch),
    AuthActions: bindActionCreators(authActions, dispatch)
  })
)(ClickOutside(LoginModalContainer));
