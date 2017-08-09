import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Input, SubmitButton } from '../../Modal';
import * as authActions  from '../../../modules/auth';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const Wrapper = styled.div`
  padding: 1rem;
  background: white;
`;

class AckDisplayName extends Component {

  handleChange = (e) => {
    const { AuthActions } = this.props;

    console.log(e.target.value);

    AuthActions.changeDisplayName(e.target.value)
  }

  render() {
    const {
      handleChange
    } = this;
    const { displayname } = this.props;
    return (
      <Wrapper>
        <Input value={displayname} placeholder="별명을 정해주세요" onChange={(e) => handleChange(e)}/>
        <SubmitButton text="시작하기"/>
      </Wrapper>
    );
  }
}

export default connect(
  (state) => ({
    displayname: state.auth.get('displayname')
  }),
  (dispatch) => ({
    AuthActions: bindActionCreators(authActions, dispatch)
  })
)(AckDisplayName);
