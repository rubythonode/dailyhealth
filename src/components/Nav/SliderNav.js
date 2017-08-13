import React from 'react';
import oc from 'open-color';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

const Wrapper = styled.div`

  /* 포지션 */
  position: fixed;
  top: 0;
  left: 0;

  /* 색상 */
  background-color: white;

  /* 기타 */
  cursor: pointer;
  z-index: 15;

`;

const Slider = styled.div`
  /* 크기 및 높이 */
  height: 100vh;
  width: 250px;
`;

const SliderNav = ({ visible }) => (
  <Wrapper>
    <CSSTransitionGroup
      transitionName="slider"
      transitionEnterTimeout={1000}
      transitionLeaveTimeout={1000}>
      {
        visible && (
          <Slider>
            하하하
          </Slider>
        )
      }
    </CSSTransitionGroup>
  </Wrapper>
);

SliderNav.PropTypes = {
  visible: PropTypes.bol
}

SliderNav.defaultProps = {
  visible: false
}

export default SliderNav;
