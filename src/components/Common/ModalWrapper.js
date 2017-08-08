import React, { Component } from 'react';
import styled from 'styled-components';
import { CSSTransitionGroup } from 'react-transition-group';

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 15;

  width: 400px;
  /* 반응형 */
  @media (max-width: 600px) {
    width: calc(100% - 1rem);
  }
`;


const ModalWrapper = ({visible, children}) => (
  <Wrapper>
    <CSSTransitionGroup
      transitionName="modal"
      transitionEnterTimeout={1000}
      transitionLeaveTimeout={1000}>
      {
        visible && <div>{children}</div>
      }
    </CSSTransitionGroup>
  </Wrapper>
)

export default ModalWrapper;
