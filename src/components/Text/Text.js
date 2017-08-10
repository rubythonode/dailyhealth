import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  /* 색상 */
  color: ${(props) => props.color};

  /* 글자 */
  font-size: ${(props) => props.fontSize};
  font-weight: 600;
  text-align: ${(props) => props.textAlign};

  /* 마진 및 패딩 */
  padding-top: 1rem;
  padding-bottom: 1rem;


`;

const Text = ({ children, fontSize, textAlign, color}) => (
  <Wrapper
    fontSize={fontSize}
    textAlign={textAlign}
    color={color}
    >

    {children}
  </Wrapper>
);

Text.PropTypes = {
  textAlign: PropTypes.string,
  fontSize: PropTypes.string,
  color: PropTypes.string
}
Text.defaultProps = {
  textAlign: 'center',
  fontSize: '1rem',
  color: 'black'
}

export default Text;
