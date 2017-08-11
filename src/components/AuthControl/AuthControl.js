import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Float } from '../';

const Wrapper = styled.div`
  /* float 해체 */
  overflow: hiddle;

  /* 기타 */
  cursor: pointer;
`;


const AuthControl = ({ onTask, ReverseTask }) => (
  <Wrapper>
    <Float direction="left">
      비밀번호 찾기
    </Float>
    <Float direction="right" onClick={() => onTask() }>
      {ReverseTask}
    </Float>
  </Wrapper>
)

AuthControl.PropTypes = {
  onTask: PropTypes.func,
  ReverseTask: PropTypes.string
}

AuthControl.defaultProps = {
  ReverseTask: '',
  onTask: () => { console.error('onTask not defined') }
}

export default AuthControl;
