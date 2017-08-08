import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import oc from 'open-color';
import { CSSTransitionGroup } from 'react-transition-group' // ES6

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
  box-shadow: 0.2px 0.2px 5px #555;
`;

const Dimmed = ({ visible }) => (
  <DimmedWrapper>
    <CSSTransitionGroup
      transitionName="fade"
      transitionEnterTimeout={200}
      transitionLeaveTimeout={200}>
        {
          visible ? <Wrapper/> : null
        }
    </CSSTransitionGroup>
  </DimmedWrapper>
);

Dimmed.PropTypes = {
  visible: PropTypes.string
}

Dimmed.defaultProps = {
  visible: false
}


export default Dimmed;
