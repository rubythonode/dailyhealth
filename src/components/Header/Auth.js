import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import User from 'react-icons/lib/fa/user';

const Wrapper = styled.div`
  float: right;

  /* 반응형 */
  @media (max-width: 600px) {
    display: none;
  }
`;

const AuthButton = styled.div`
  /* 위치 */
  margin-top: 0.7rem;

  /* 색상 */
  background-color: ${oc.gray[7]};
  color: white;

  /* 크기 */
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  /* 기타 */
  cursor: pointer;

  /* 테두리 */
  border-radius: 4px;

  /* 효과 */
  transition: background 0.4s;

  &:hover {
    background-color: ${oc.pink[6]};
  }
`;

const Auth = ({onLoginButtonClick}) => (
  <Wrapper>
    <AuthButton onClick={() => { onLoginButtonClick() }}>
      <User size={25}/> 로그인 / 회원가입
    </AuthButton>
  </Wrapper>
);

export default Auth;
