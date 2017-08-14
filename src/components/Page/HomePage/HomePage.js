import React, { Component } from 'react';
import { Background } from '../../';
import auth from '../../../api/auth';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from '../../../store/modules/auth';
import users from '../../../api/users';
import { withRouter } from 'react-router';
import alertify from 'alertifyjs';

class HomePage extends Component {

  // 디스플레이값 반영
  handleDisplayname = (e) => {
    const { AuthActions } = this.props;
    const { value } = e.target;
    AuthActions.changeDisplayName(value)
  }


  // 별명 설정

  handleCreateDisplayName = () => {
    const { uid, displayname, AuthActions, history } = this.props;
    if(displayname === "") {
      alertify.error('닉네임이 비어있어요!');
      return
    }
    users.createDisplayName(uid, displayname);


    users.findUserById(uid).then((user) => {
      AuthActions.changeLoginStatus(false);
      AuthActions.setUserColor(user.val().color);
      history.push('/daily');
    });

  }

  render() {
    const {
      loginstatus
    } = this.props;

    const {
      handleDisplayname,
      handleCreateDisplayName
    } = this;
    return (
      <div>
        <Background
          loginstatus={loginstatus}
          onDisplayname={handleDisplayname}
          onCreateDisplayName={handleCreateDisplayName}
          />
      </div>
    );
  }

}

export default connect(
  (state) => ({
    loginstatus: state.auth.getIn(['login', 'status']),
    uid: state.auth.getIn(['user', 'uid']),
    displayname: state.auth.getIn(['login', 'displayname'])
  }),
  (dispatch) => ({
    AuthActions: bindActionCreators(authActions, dispatch)
  })
)(withRouter(HomePage));
