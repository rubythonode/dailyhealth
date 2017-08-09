import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import User from 'react-icons/lib/fa/user';
import Out from 'react-icons/lib/fa/sign-out';

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
  margin-left: 0.7rem;

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
  display: inline-block;

  /* 테두리 */
  border-radius: 4px;

  /* 효과 */
  transition: background 0.4s;

  &:hover {
    background-color: ${oc.pink[6]};
  }
`;

const UserInfomation = styled.div`

`;

const Auth = ({onLoginButtonClick, onLogout, login}) => login ? (
  <Wrapper>
    <AuthButton>
      <User size={25}/> 마이페이지
    </AuthButton>
    <AuthButton onClick={() => { onLogout() }}>
      <Out size={25}/> 로그아웃
    </AuthButton>
  </Wrapper>
) : (
  <Wrapper>
    <AuthButton onClick={() => { onLoginButtonClick() }}>
      <User size={25}/> 로그인 / 회원가입
    </AuthButton>
  </Wrapper>
);

export default Auth;
