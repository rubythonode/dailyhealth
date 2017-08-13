import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import alertify from 'alertifyjs';
import PropTypes from 'prop-types';
import * as baseActions from '../store/modules/base';
import * as authActions from '../store/modules/auth';
import { HomePage, DailyPage } from './Page';
import { HeaderContainer, LoginModalContainer, AccountExistModalContainer, DimmedContainer } from '../containers';
import auth from '../api/auth';
import users from '../api/users';

class App extends Component {

  componentDidMount() {
    const { AuthActions } = this.props;
    // 실시간 리스너 감지
    auth.onAuthStateChanged((firebaseUser) => {

      // 만약에 로그인 중이라면
      if(firebaseUser) {


        users.findUserById(firebaseUser.uid).then((user) => {
          console.log(user.val());

          if(user.val() != null) {
            if(user.val().displayName === undefined) {
              AuthActions.changeLoginStatus(true);
              alertify.error('별명을 설정하세요!');
            }
          }

          if(!user.exists()) {
            users.createUserData(firebaseUser);
          }
        })

        AuthActions.changeUserStatus({
          'status': true,
          'uid': firebaseUser.uid
        });


      } else {
        console.log('로그인중이 아니네')
        AuthActions.changeUserStatus({
          'status':false,
          'uid': ''
        });
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
  handleModal = (boolean) => {
    const { BaseActions } = this.props;
    BaseActions.setDimmedVisibility(boolean);
    BaseActions.setModalVisibility(boolean);
    BaseActions.setAccountExistModalVisibility(boolean, '');
  }

  // oauth 가입시 이메일 중복으로 충돌시 출력되는 모달 핸들링 함수
  handleAccountExistModal = (boolean, email) => {
    const { BaseActions } = this.props;
    BaseActions.setDimmedVisibility(boolean);
    BaseActions.setAccountExistModalVisibility({
      'visible':boolean,
      email
    });
  }

  // esc 버튼 누르면 모달 다운
  handleKeyDown = (e) => {
    // ESC 키 코드
    if(e.keyCode === 27) {
      this.handleModal(false);
      this.handleAccountExistModal(false, '');
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
    const { task, form, AuthActions } = this.props;
    const { email, password } = form.toJS();
    if(task === 'login') {
      const promise = auth.signInWithEmailAndPassword(email, password);

      promise.then((user) => {
        // 로그인이 정상적으로 완료되었다면?
        if(user.uid) {
          alertify.success('로그인에 성공했어요!');
          this.handleModal(false);
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
         default:
          console.log('해당되는 code 없습니다')
        }
      })
    } else {
      const promise = auth.createUserWithEmailAndPassword(email, password);
      promise.then((user) => {
        // 정상적으로 가입이 되었다면
        if(user.uid) {
          // 모달 닫기
          alertify.success('추가 정보를 입력해주세요!');


          // 추가 정보를 받기 위한 background 상태 변화
          AuthActions.changeLoginStatus(true);
          this.handleModal(false);
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
          default:
           console.log('해당되는 code 없습니다'+error)
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
  /*
    oauth 로그인 부분 소스코드 중복 확인 리팩토링 예정
  */
  handaleGoogleLogin = () => {

    const promise = auth.google();

    promise.then((user) => {
      // 정상적으로 승인이 되었다면
      if(user) {
        alertify.success('로그인에 성공했어요!');
        // 모달 닫기
        this.handleModal(false);
      }
    }).catch((error) => {
      // 에러 핸들링
      const { code, email } = error;

      // code에 따른 오류 제어 분기
      switch(code) {
        // 동일한 이메일로 이미 가입한 계정이 있다면
        case 'auth/account-exists-with-different-credential':
          // 로그인 모달을 닫는다
          this.handleModal(false);
          this.handleAccountExistModal(true, email);
          break;
        case 'auth/popup-closed-by-user':
          alertify.error('소셜 로그인을 취소했어요!');
          break;
        case 'auth/network-request-failed':
          alertify.error('네트워크 상황이 좋지 못해요!');
          break;
        default:
         console.log('해당되는 code 없습니다'+code)
      }
    })
  }

  handleFacebookLogin = () => {
    const promise = auth.facebook();

    promise.then((user) => {
      // 정상적으로 승인이 되었다면
      if(user) {
        alertify.success('로그인에 성공했어요!');
        // 모달 닫기
        this.handleModal(false);
      }
    }).catch((error) => {
      // 에러 핸들링
      const { code, email } = error;

      // code에 따른 오류 제어 분기
      switch(code) {
        // 동일한 이메일로 이미 가입한 계정이 있다면

        case 'auth/account-exists-with-different-credential':
          // 로그인 모달을 닫는다
          this.handleModal(false);
          this.handleAccountExistModal(true, email);
          break;
        case 'auth/popup-closed-by-user':
          alertify.error('소셜 로그인을 취소했어요!');
          break;
        case 'auth/network-request-failed':
          alertify.error('네트워크 상황이 좋지 못해요!');
          break;
        default:
         console.log('해당되는 code 없습니다')
      }
    })
  }

  // oauth 상호 연동을 위한 메서드
  handleConnectOauth = (email) => {
    auth.connectOauth(email);
    this.handleModal(false);
  }

  // 로그아웃

  handleLogout = () => {
    const { AuthActions } = this.props;
    auth.logout();
    AuthActions.changeUserStatus({
      'status':false,
      'uid': ''
    });
    alertify.success('로그아웃에 성공했어요!');
  }

  render() {
    // props
    const {
      modalVisible,
      accountExistModalVisible,
      dimmedVisible,
      task,
      email,
      status,
      loginstatus
    } = this.props;

    // function
    const {
      handleModal,
      handleTask,
      handleAuth,
      handleChangeInput,
      handaleGoogleLogin,
      handleFacebookLogin,
      handleConnectOauth,
      handleLogout
    } = this;

    return (
      <Router>
        <div>
          <HeaderContainer
            onModal={handleModal}
            status={status}
            onLogout={handleLogout}
            />
          <Route exact path="/" component={HomePage} />
          <Route path="/daily" component={DailyPage} />
          <AccountExistModalContainer
            accountExistModalVisible={accountExistModalVisible}
            email={email}
            onModal={handleModal}
            onConnectOauth={handleConnectOauth}
            />
          <LoginModalContainer
            modalVisible={modalVisible}
            onTask={handleTask}
            task={task}
            onAuth={handleAuth}
            onChangeInput={handleChangeInput}
            onGoogleLogin={handaleGoogleLogin}
            onFacebookLogin={handleFacebookLogin}
            />

          <DimmedContainer
            dimmedVisible={dimmedVisible}
            onModal={handleModal}
            />
        </div>
      </Router>
    );
  }
}

export default connect(
  (state) => ({
    modalVisible: state.base.getIn(['loginmodal', 'visible']),
    accountExistModalVisible: state.base.getIn(['accountexistmodal', 'visible']),
    task: state.base.getIn(['loginmodal', 'task']),
    email: state.base.getIn(['accountexistmodal', 'email']),
    dimmedVisible: state.base.getIn(['dimmed', 'visible']),
    form: state.auth.get('form'),
    status: state.auth.getIn(['user', 'status'])
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch),
    AuthActions: bindActionCreators(authActions, dispatch)
  })
)(App);
