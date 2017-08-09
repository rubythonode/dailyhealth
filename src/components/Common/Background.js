import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';


const Wrapper = styled.div`
  background-size: cover;
  background: linear-gradient(0deg, #21abc7, #616db3);
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  flex-direction: column;
`;

const Background = ({children}) => (
  <Wrapper>
    {children}
  </Wrapper>
);

export default Background;
