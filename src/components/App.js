import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import alertify from 'alertifyjs';

import * as baseActions from '../store/modules/base';
import * as authActions from '../store/modules/auth';
import { HomePage, DailyPage } from './Page';
import { HeaderContainer, LoginModalContainer, DimmedContainer } from '../containers';
import auth from '../api/auth';


class App extends Component {
  componentDidMount() {
    // 실시간 리스너 감지
    auth.onAuthStateChanged((firebaseUser) => {
      // 만약에 로그인 중이라면
      if(firebaseUser) {
        console.log('로그인중입니다');
      } else {
        console.log('로그인중이 아니네')
      }
    })

    // 키보드 감지
    window.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnMount() {
    // 키보드 감지
    window.removeEventListener("keydown", this.handleKeyDown);
  }


  // 모달 열기 또는 닫기
  handleLoginModal = (boolean) => {
    const { BaseActions } = this.props;
    BaseActions.setDimmedVisibility(boolean);
    BaseActions.setModalVisibility(boolean);
  }

  // esc 버튼 누르면 모달 다운
  handleKeyDown = (e) => {
    // ESC 키 코드
    if(e.keyCode === 27) {
      this.handleLoginModal(false);
    }
  }

  // task 변경을 위한 함수
  handleTask = () => {
    const { BaseActions, task } = this.props;
    const realTimeTask = task === 'login' ? 'register' : 'login';
    BaseActions.setToggleUserTask(realTimeTask);
  }

  // task에 따라 이메일과 패스워드 인증 토글 가입 및 로그인
  handleAuth = () => {
    const { task, form } = this.props;
    const { email, password } = form.toJS();
    if(task === 'login') {
      const promise = auth.signInWithEmailAndPassword(email, password);

      promise.then((user) => {
        // 로그인이 정상적으로 완료되었다면?
        if(user.uid) {
          alertify.success('로그인에 성공했어요!');
          this.handleLoginModal(false);
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
      const promise = auth.createUserWithEmailAndPassword(email, password);
      promise.then((user) => {
        // 정상적으로 가입이 되었다면
        if(user.uid) {
          // 모달 닫기
          alertify.success('추가 정보를 입력해주세요!');
          this.handleLoginModal(false);
        }
      }).catch((error) => {
        // 상황에 따른 오류처리
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

  // 이메일과 비밀번호 키보드 입력시마다 변경
  handleChangeInput = (e) => {
    const { AuthActions } = this.props;
    const { name, value } = e.target;
    AuthActions.changeInput({name, value})
  }

  // oauth
  // google login

  handaleGoogleLogin = () => {
    const { BaseActions, AuthActions } = this.props;

    const promise = auth.google();

    promise.then((user) => {
      // 정상적으로 승인이 되었다면
      if(user) {
        alertify.success('로그인에 성공했어요!');
        // 모달 닫기
        this.handleLoginModal(false);
      }
    }).catch((error) => {
      // 에러 핸들링
      const { code } = error;

      // code에 따른 오류 제어 분기
      switch(code) {
        // 동일한 이메일로 이미 가입한 계정이 있다면
        case 'auth/account-exists-with-different-credential':
          // 로그인 모달을 닫는다
          this.handleLoginModal(false);
          break;
      }
    })
  }

  render() {
    // props
    const {
      modalVisible,
      dimmedVisible,
      task
    } = this.props;

    // function
    const {
      handleLoginModal,
      handleTask,
      handleAuth,
      handleChangeInput,
      handaleGoogleLogin
    } = this;

    return (
      <Router>
        <div>
          <HeaderContainer
            onLoginModal={handleLoginModal}
            />
          <Route exact path="/" component={HomePage} />
          <Route path="/daily" component={DailyPage} />
          <LoginModalContainer
            modalVisible={modalVisible}
            onTask={handleTask}
            task={task}
            onAuth={handleAuth}
            onChangeInput={handleChangeInput}
            onGoogleLogin={handaleGoogleLogin}
            />
          <DimmedContainer
            dimmedVisible={dimmedVisible}
            onLoginModal={handleLoginModal}
            />
        </div>
      </Router>
    );
  }
}

export default connect(
  (state) => ({
    modalVisible: state.base.getIn(['modal', 'visible']),
    task: state.base.getIn(['modal', 'task']),
    dimmedVisible: state.base.getIn(['dimmed', 'visible']),
    form: state.auth.get('form')
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch),
    AuthActions: bindActionCreators(authActions, dispatch)
  })
)(App);
