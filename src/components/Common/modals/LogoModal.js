import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';


const Wrapper = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: white;
  background-color: ${oc.pink[6]};
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 3rem;
  padding-right: 3rem;
  text-align: center;
`;

const LogoModal = () => (
  <Wrapper>
    Daily Health
  </Wrapper>
)

export default LogoModal;
