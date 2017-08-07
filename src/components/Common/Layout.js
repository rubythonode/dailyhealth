import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Wrapper = styled.div`
  padding-top: 4rem;
`;

const Main = styled.div`
  margin: 0 auto;
  margin-top: 2rem;
  width: 1000px;
  position: relative;
  background: gray;

  @media (max-width: 1200px) {
      width: 998px;
  }

  @media (max-width: 900px) {
    width: calc(100% - 2rem);
  }

  @media (max-width: 600px) {
    width: calc(100% - 1rem);
  }
`;

const Layout = ({children}) => (
  <Wrapper>
    <Main>
      {children}
    </Main>
  </Wrapper>
)

export default Layout;
