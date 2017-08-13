import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  float: right;

  /* 반응형 */
  @media (max-width: 600px) {
    display: none;
  }
`;

const Nav = ({children}) => (
  <Wrapper>
    {children}
  </Wrapper>
);

export default Nav;
