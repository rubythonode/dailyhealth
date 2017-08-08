import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import PropTypes from 'prop-types';

import { Logo, Sidebar, Auth } from './';

const Wrapper = styled.div`
  /* 색상 */
  background-color: white;

  /* 위치 */
  position: fixed;

  /* 크기 */
  height: 4rem;
  width: 100%;

  /* 효과 */
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.2);
`;

const WrapperHeader = styled.div`
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

const Header = ({onLoginButtonClick}) => (
  <Wrapper>
    <WrapperHeader>
      <Sidebar/>
      <Logo/>
      <Auth onLoginButtonClick={onLoginButtonClick}/>
    </WrapperHeader>
  </Wrapper>
);

Header.PropTypes = {
  onLoginButtonClick: PropTypes.func
}

Header.defaultProps = {
  onLoginButtonClick: () => { console.error('onLoginButtonClick not defined') }
}

export default Header;
