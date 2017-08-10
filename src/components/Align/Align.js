import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  /* 정렬 */
  text-align: ${(props) => props.align};
`;

const Align = ({ children, align }) => (
  <Wrapper align={align}>
    {children}
  </Wrapper>
);

Align.PropTypes = {
  align: PropTypes.string
}

Align.defaultProps = {
  align: 'center'
}

export default Align;
