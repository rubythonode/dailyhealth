import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import FaAlignJustify from 'react-icons/lib/fa/align-justify';
import User from 'react-icons/lib/fa/user';

const Wrapper = styled.div`
  background-color: white;
  height: 4rem;
  box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.2);
  position: fixed;
  width: 100%;
`;

const WrapperHeader = styled.div`
  margin: 0 auto;
  height: 4rem;
  width: 1000px;
  padding-left: 1rem;
  padding-right: 1rem;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const Logo = styled.div`
  line-height: 4rem;
  font-size: 1.5rem;
  font-weight: 800;
  color: ${oc.pink[6]};
  display: inline-block;
  cursor: pointer;
`;

const Spacer = styled.div`
  height: 4rem;
  width: 100%;
`;


const SidebarButton = styled.div`
  float: left;
  font-size: 1.5rem;
  line-height: 4rem;
  margin-right: 1rem;
  color: ${oc.gray[6]};
  cursor: pointer;
  transition: all .4s;

  &:hover {
    color: ${oc.pink[5]};
  }

  @media (min-width: 600px) {
    display: none;
  }
`;

const AuthButtonWrapper = styled.div`
  float: right;

  @media (max-width: 600px) {
    display: none;
  }
`;

const AuthButton = styled.div`
  background-color: ${oc.gray[7]};
  font-weight: bold;
  color: white;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  border-radius: 4px;
  margin-top: 0.9rem;
  transition background .5s;
  cursor: pointer;

  &:hover {
    background: ${oc.pink[6]};
  }

  svg {
    margin-top: -0.3rem;
    margin-right: 1rem;
  }
`;

const Header = () => (
  <Wrapper>
    <WrapperHeader>
      <SidebarButton>
        <FaAlignJustify/>
      </SidebarButton>
      <Logo>
        Daily Health
      </Logo>
      <AuthButtonWrapper>
        <AuthButton>
          <User/>로그인 / 회원가입
        </AuthButton>
      </AuthButtonWrapper>
    </WrapperHeader>
    <Spacer>
    </Spacer>
  </Wrapper>
)

export default Header;
