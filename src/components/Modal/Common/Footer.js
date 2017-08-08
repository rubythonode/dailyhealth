import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  /* float 초기화 */
  overflow: hidden;

  /* 폰트 */
  font-weight: bold;

  /* 기타 */
  cursor: pointer;

`;

const Password = styled.div`
  float: left;
`;

const Auth = styled.div`
  float: right;
`;

const Footer = ({modeText, onChangeMode, onChangeModePassword}) => (
  <Wrapper>
    <Password onClick={() => { onChangeModePassword() }}>비밀번호 찾기</Password>
    <Auth onClick={() => { onChangeMode() }}>{modeText}</Auth>
  </Wrapper>
)

export default Footer;
