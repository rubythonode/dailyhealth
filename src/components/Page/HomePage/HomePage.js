import React, { Component } from 'react';
import { Background } from '../../';
import auth from '../../../api/auth';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from '../../../store/modules/auth';
import users from '../../../api/users';


class HomePage extends Component {

  // 디스플레이값 반영
  handleDisplayname = (e) => {
    const { AuthActions } = this.props;
    const { value } = e.target;
    AuthActions.changeDisplayName(value)
  }


  // 별명 설정

  handleCreateDisplayName = () => {
    const { uid, displayname, AuthActions } = this.props;
    users.createDisplayName(uid, displayname);
    AuthActions.changeLoginStatus(false);
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
)(HomePage);
