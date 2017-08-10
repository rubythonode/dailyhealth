import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Input, SubmitButton } from '../../Modal';
import * as authActions  from '../../../modules/auth';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import users from '../../../helpers/firebase/users';
import { withRouter } from 'react-router-dom';

const Wrapper = styled.div`
  padding: 1rem;
  background: white;
`;

class AckDisplayName extends Component {

  handleChange = (e) => {
    const { AuthActions } = this.props;

    AuthActions.changeDisplayName(e.target.value)
  }

  handleClick = () => {
    const { displayname, uid, history } = this.props;

    if(displayname.length === 0) {
      alert('닉네임을 필수 입력해주세요!');
    }

    users.pushDisplayName(uid, displayname);
    history.push('/');

  }

  render() {
    const {
      handleChange,
      handleClick
    } = this;
    const { displayname } = this.props;
    return (
      <Wrapper>
        <Input value={displayname} placeholder="닉네임을 정해주세요" onChange={(e) => handleChange(e)}/>
        <SubmitButton onClick={handleClick} text="시작하기"/>
      </Wrapper>
    );
  }
}

export default connect(
  (state) => ({
    displayname: state.auth.get('displayname'),
    uid: state.auth.get('uid')
  }),
  (dispatch) => ({
    AuthActions: bindActionCreators(authActions, dispatch)
  })
)(withRouter(AckDisplayName));
