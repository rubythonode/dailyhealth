import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import oc from 'open-color';
import { CSSTransitionGroup } from 'react-transition-group';

const DimmedWrapper = styled.div`
  /* 기타 */
  z-index: 10;
  opacity: 0.5;
`;

const Wrapper = styled.div`
  /* 위치 */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  /* 색상 */
  background-color: ${oc.gray[7]};
`;

const Dimmed = ({ dimmedVisible, onLoginModal}) => (
  <DimmedWrapper onClick={() => { onLoginModal(false) }}>
    <CSSTransitionGroup
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={800}>
      {
        dimmedVisible ? <Wrapper/> : null
      }
    </CSSTransitionGroup>
  </DimmedWrapper>
);

Dimmed.PropTypes = {
  dimmedVisible: PropTypes.bol,
  onLoginModal: PropTypes.func
}

Dimmed.defaultProps = {
  dimmedVisible: false,
  onLoginModal: () => { console.error('onLoginModal not defined') }
}


export default Dimmed;
