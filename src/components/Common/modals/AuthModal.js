import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { LogoModal, AuthSocial } from '../../../components';


const Text = styled.div`
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  padding: 1rem 0;
`;

const WrapperInput = styled.div`
  padding: 1rem 1rem;
`;

const Input = styled.input`
  outline: none;
  border: 1px solid ${oc.gray[3]};
  padding: 0.5rem;
  font-size: 1.25rem;
  width: 100%;
  margin-bottom: 1rem;

  &:focus {
    border: 1px solid ${oc.pink[6]};
  }
`;

const UserWrapper = styled.div`
  overflow: hidden;
  cursor: pointer;
`;

const FindPassword = styled.div`
  float: left;
`;

const MoveRegister = styled.div`
  float: right;
`;

const LoginButton = styled.div`
  background-color: ${oc.gray[7]};
  margin: 1rem 0;
  padding: 0.5rem 1rem;
  text-align: center;
  color: white;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: ${oc.gray[5]};
  }
`;

const Separator = styled.div`
  display: block;
  background-color: ${oc.gray[5]};
  height: 1px;
  margin-top: 1rem;
  position: relative;
`;

const OR = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${oc.gray[5]};
  background-color: white;
`;

const AuthModal = ({status, handleAuthMode}) => status === 'login' ? (
  <div>
    <LogoModal/>
    <Text>함께 운동 목표를 달성해요!</Text>
    <WrapperInput>
      <Input type="text" placeholder="이메일을 입력하세요"></Input>
      <Input type="password" placeholder="비밀번호를 입력하세요"></Input>
      <UserWrapper>
        <FindPassword onClick={() => handleAuthMode('finepassword')}>비밀번호 찾기</FindPassword>
        <MoveRegister onClick={() => handleAuthMode('register')}>회원가입</MoveRegister>
      </UserWrapper>
      <LoginButton>로그인</LoginButton>
      <Separator>
        <OR>
          OR
        </OR>
      </Separator>
      <AuthSocial/>
    </WrapperInput>
  </div>
) : status === 'register' ? (
  <div>
    <LogoModal/>
    <Text>함께 운동 목표를 달성해요!</Text>
    <WrapperInput>
      <Input type="text" placeholder="이메일을 입력하세요"></Input>
      <Input type="password" placeholder="비밀번호를 입력하세요"></Input>
      <UserWrapper>
        <FindPassword onClick={() => handleAuthMode('finepassword')}>비밀번호 찾기</FindPassword>
        <MoveRegister onClick={() => handleAuthMode('login')}>로그인</MoveRegister>
      </UserWrapper>
      <LoginButton>회원가입</LoginButton>
    </WrapperInput>
  </div>
) : (
  <div>
    아 이렇게 하면 안되는데;;;
  </div>
)

export default AuthModal;
