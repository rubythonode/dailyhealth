import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`

  /* 크기 */
  width: ${(props) => props.width};

  /* 색상 */
  background-color: white;


  /* 패딩 및 마진 */
  padding: 1rem;

  /* 반응형 */
  @media (max-width: 600px) {
    width: calc(100% - 1rem);
  }
`;

const Content = ({ children, width }) => (
  <Wrapper width={width}>
    {children}
  </Wrapper>
);

Content.PropTypes = {
  width: PropTypes.string
}

Content.defaultProps = {
  width: ''
}

export default Content;
