import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';


const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;

  @media (max-width: 900px) {
    width: calc(100% - 2rem);
  }

  @media (max-width: 600px) {
    width: calc(100% - 1rem);
  }
`;

const Modal = ({children}) => (
  <Wrapper>
    {children}
  </Wrapper>
)

export default Modal;
