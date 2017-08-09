import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Wrapper = styled.div`
  /* 크기 */
  padding: 1rem;
  /* 색상 */
  background-color: white;
`;

const Content = ({children}) => (
  <Wrapper>
    {children}
  </Wrapper>
)

export default Content;
