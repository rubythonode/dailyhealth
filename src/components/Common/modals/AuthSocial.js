import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import GoogleIcon from 'react-icons/lib/fa/google';
import FacebookIcon from 'react-icons/lib/fa/facebook-official';

const Wrapper = styled.div`
  text-align: center;
`;

const ButtonList = styled.div`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  color: white;
  cursor: pointer;

  &.google {
    background-color: ${oc.red[7]};

    &:hover {
      background-color: ${oc.red[5]};
    }
  }

  &.facebook {
    background-color: ${oc.blue[7]};

    &:hover {
      background-color: ${oc.blue[5]};
    }
  }

  svg {
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }
`;

const LoginSocial = () => (
  <Wrapper>
    <ButtonList className="google">
      <GoogleIcon/> 구글로 로그인하기
    </ButtonList>
    <ButtonList className="facebook">
      <FacebookIcon/> 페이스북으로 로그인하기
    </ButtonList>
  </Wrapper>
)

export default LoginSocial;
