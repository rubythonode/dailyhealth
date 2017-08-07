import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${oc.gray[7]};
  z-index: 1;
  opacity: 0.5;
`;

const Dimmed = ({visible}) => visible ? (
  <Wrapper>

  </Wrapper>
) : null;

export default Dimmed;
