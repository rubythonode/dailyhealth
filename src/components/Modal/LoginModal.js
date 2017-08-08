import React from 'react';
import styled from 'styled-components';
import { ModalWrapper } from '../';
import { Logo, Input, Footer, Separator, SocialButton, SubmitButton } from './';

const Content = styled.div`
  padding: 1rem;
  background-color: white;
`;

const LoginModal = ({visible, mode, onChangeMode, onChangeModePassword}) => {
  const modeText = mode === 'login' ? '회원가입' : '로그인';
  const modeReverseText = mode === 'login' ? '로그인' : '회원가입';

  const login = (
    <div>
      <Logo>
      Daily Health
      </Logo>
      <Content>
        <Input type="email" placeholder="이메일을 입력하세요"/>
        <Input type="password" placeholder="비밀번호를 입력하세요"/>
        <SubmitButton text={modeReverseText}/>
        <Footer modeText={modeText} onChangeMode={onChangeMode} onChangeModePassword={onChangeModePassword}/>
        <Separator/>
        <SocialButton/>
      </Content>
    </div>
  )

  const findPassword = (
    <div>
      <Logo>
      Daily Health
      </Logo>
      <Content>
        <Input type="email" placeholder="이메일을 입력하세요"/>
        <SubmitButton text="비밀번호 찾기"/>
      </Content>
    </div>
  )

  return (
    <ModalWrapper visible={visible}>
      {
        (mode === 'login' || mode === 'register') ? login : findPassword
      }
    </ModalWrapper>
  )
}

export default LoginModal;
