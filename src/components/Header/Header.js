import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import PropTypes from 'prop-types';
import { Sidebar, Logo, Nav, Button } from '../';
import User from 'react-icons/lib/fa/user';

const Wrapper = styled.div`
  /* 색상 */
  background-color: white;

  /* 위치 */
  position: fixed;

  /* 크기 */
  height: 4rem;
  width: 100%;

  /* 그림자 */
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.2);
`;

const Center = styled.div`
  /* 중앙 정렬 */
  margin: 0 auto;

  /* 크기 */
  width: 998px;
  height: 4rem;

  /* 위치 */
  padding-left: 1rem;
  padding-right: 1rem;

  /* 반응형 */
  @media (max-width: 998px) {
    width: 100%;
  }
`;

const Header = ({children, onLoginModal}) => (
  <Wrapper>
    <Center>
      <Sidebar/>
      <Logo/>
      <Nav>
        <Button text="로그인 / 회원가입" backgroundColor={oc.gray[7]} onClick={() => { onLoginModal(true) }}>
          <User size={20}/>
        </Button>
      </Nav>
    </Center>
  </Wrapper>
);

Header.PropTypes = {
  onLoginModal: PropTypes.func
}

Header.defaultProps = {
  onLoginModal: () => { console.error('onLoginModal not defined') }
}

export default Header;
