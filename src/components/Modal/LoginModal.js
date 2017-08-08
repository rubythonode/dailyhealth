import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { ModalWrapper } from '../';
import { Logo, Input, Footer, Separator, SocialButton } from './';

const Wrapper = styled.div`
  width: 400px;
`;

const Content = styled.div`
  padding: 1rem;
  background-color: white;
`;

const LoginModal = ({visible, mode, onChangeMode}) => {
  const modeText = mode === 'login' ? '회원가입' : '로그인';

  return (
    <ModalWrapper visible={visible}>
      <Wrapper>
        <Logo>
        Daily Health
        </Logo>
        <Content>
          <Input type="text" placeholder="아이디를 입력하세요"/>
          <Input type="password" placeholder="비밀번호를 입력하세요"/>
          <Footer modeText={modeText} onChangeMode={onChangeMode}/>
          <Separator/>
          <SocialButton/>
        </Content>
      </Wrapper>
    </ModalWrapper>
  )
}

export default LoginModal;
