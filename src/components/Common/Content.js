import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';


const Wrapper = styled.div`
  width: 400px;
`;

const Content = ({children}) => (
  <Wrapper>
    {children}
  </Wrapper>
);

export default Content;
