import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  float: ${(props) => props.direction};
`;


const Float = ({ children, direction, onClick }) => (
  <Wrapper direction={direction} onClick={onClick}>
    {children}
  </Wrapper>
)

Float.PropTypes = {
  direction: PropTypes.string,
  onClick: PropTypes.func
}

Float.defaultProps = {
  direction: '',
  onClick: () => { console.error('onClick not defined') }
}

export default Float;
