import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import PropTypes from 'prop-types';

const Wrapper = styled.div`

  /* 위치 */
  margin-top: 0.7rem;

  /* 색상 */
  background-color: ${(props) => props.backgroundColor};
  color: white;


  /* 크기 */

  width: ${(props) => props.width};

  /* 패딩 및 마진 */
  padding-left: ${(props) => props.size};
  padding-right: ${(props) => props.size};
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  /* 기타 */
  cursor: pointer;
  display: inline-block;

  /* 테두리 */
  border-radius: 4px;

  /* 효과 */
  transition: background 0.4s;

  /* 글꼴 */
  font-weight: 600;
  text-align: center;


  &:hover {
    background-color: ${(props) => props.HoverbackgroundColor};
  }
`;

const Button = ({
  children,
  text,
  backgroundColor,
  size,
  HoverbackgroundColor,
  width,
  onClick
}) => (
  <Wrapper
    backgroundColor={backgroundColor}
    size={size}
    HoverbackgroundColor={HoverbackgroundColor}
    width={width}
    onClick={onClick}
    >
    { children } {text}
  </Wrapper>
);

Button.PropTypes = {
  text: PropTypes.string,
  backgroundColor: PropTypes.string,
  width: PropTypes.string,
  size: PropTypes.string,
  HoverbackgroundColor: PropTypes.string,
  width: PropTypes.string,
  onClick: PropTypes.func
}

Button.defaultProps = {
  text: '버어튼',
  backgroundColor: 'black',
  width: '',
  size: '1rem',
  HoverbackgroundColor: '#d6336c',
  width: '',
  onClick: () => { console.error('onClick not defined') }
}

export default Button;
