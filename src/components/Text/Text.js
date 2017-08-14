import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.p`
  /* 색상 */
  color: ${(props) => props.color};

  /* 글자 */
  font-size: ${(props) => props.fontSize};
  font-weight: 600;
  text-align: ${(props) => props.textAlign};

  /* 마진 및 패딩 */
  padding-top: ${(props) => props.padding ? props.padding : '1rem'};
  padding-bottom: ${(props) => props.padding ? props.padding : '1rem'};
  margin: 0;
  & > a {
    color: #000;
    text-decoration: none;
  }

`;

const Text = ({ children, fontSize, textAlign, color, onClick, padding}) => (
  <Wrapper
    fontSize={fontSize}
    textAlign={textAlign}
    color={color}
    onClick={onClick}
    padding={padding}
    >

    {children}
  </Wrapper>
);

Text.PropTypes = {
  textAlign: PropTypes.string,
  fontSize: PropTypes.string,
  color: PropTypes.string,
  padding: PropTypes.string
}
Text.defaultProps = {
  textAlign: 'center',
  fontSize: '1rem',
  color: 'black',
  padding: '1rem'
}

export default Text;
