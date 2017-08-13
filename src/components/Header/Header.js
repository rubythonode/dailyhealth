import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import PropTypes from 'prop-types';
import { Sidebar, Logo, Nav, Button } from '../';
import User from 'react-icons/lib/fa/user';
import { Menu, MenuItem } from 'react-mdl';

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

const Header = ({
  children,
  onModal,
  status,
  onLogout,
  color,
  onSliderNav
}) => {
  // 로그인 상태라면
  const login = (
      <div style={{position: 'relative'}}>
          <User size={40} color="white"
            name="more_vert"
            id="demo-menu-lower-left"
            style={{
            'backgroundColor': color,
            'borderRadius': '2rem',
            'padding': '0.5rem',
            'cursor': 'pointer',
            'marginTop': '0.6rem'
            }} />
          <Menu target="demo-menu-lower-left" align="right">
              <MenuItem>마이 페이지</MenuItem>
              <MenuItem onClick={() => { onLogout() }}>로그아웃</MenuItem>
          </Menu>
      </div>
  );

  // 로그인 상태가 아니라면
  const Notlogin = (
    <Button text="로그인 / 회원가입" backgroundColor={oc.gray[7]} onClick={() => { onModal(true) }}>
      <User size={20}/>
    </Button>
  );

  return (
    <Wrapper>
      <Center>
        <Sidebar onSliderNav={onSliderNav}/>
        <Logo/>
        <Nav>
          { status === true ? login : Notlogin }
        </Nav>
      </Center>
    </Wrapper>
  )
};

Header.PropTypes = {
  onModal: PropTypes.func,
  onLogout: PropTypes.func,
  status: PropTypes.bol,
  color: PropTypes.string,
  onSliderNav: PropTypes.func
}

Header.defaultProps = {
  status: false,
  color: '#fff',
  onLogout: () => { console.error('onLogout not defined') },
  onModal: () => { console.error('onModal not defined') },
  onSliderNav: () => { console.error('onSliderNav not defined') }
}

export default Header;
