import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

const Wrapper = styled.div`

  /* 포지셔닝 */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 15;

  /* 크기 */
  width: 400px;

  /* 색상 */
  background-color: white;

  /* 반응형 */
  @media (max-width: 600px) {
    width: calc(100% - 1rem);
  }
`;

const Shadow = styled.div`
  /* 그림자 */
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.2);
`;

const ModalWrapper = ({modalVisible, children}) => (
  <Wrapper>
    <CSSTransitionGroup
      transitionName="modal"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={100}>
      {
        modalVisible && <Shadow>{children}</Shadow>
      }
    </CSSTransitionGroup>
  </Wrapper>
)

ModalWrapper.PropTypes = {
  modalVisible: PropTypes.bol
}

ModalWrapper.defaultProps = {
  modalVisible: false
}


export default ModalWrapper;
