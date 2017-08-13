import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import FaAlignJustify from 'react-icons/lib/fa/align-justify';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  /* 정렬 */
  float: left;

  /* 수평 정렬 */
  line-height: 4rem;

  /* 크기 */
  font-size: 1.5rem;

  /* 위치 */
  margin-right: 1rem;

  /* 기타 */
  cursor: pointer;

  /* 효과 */
  transition: all .4s;

  &:hover {
    color: ${oc.pink[5]};
  }

  /* 반응형 */
  @media (min-width: 600px) {
    display: none;
  }

`;

const Sidebar = ({onSliderNav}) => (
  <Wrapper onClick={() => { onSliderNav() }}>
    <FaAlignJustify/>
  </Wrapper>
);

Sidebar.PropTypes = {
  onSliderNav: PropTypes.func
}

Sidebar.defaultProps = {
  onSliderNav: () => { console.error('onSliderNav not defined') }
}

export default Sidebar;
