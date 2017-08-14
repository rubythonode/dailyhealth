import React from 'react';
import oc from 'open-color';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import User from 'react-icons/lib/fa/user';
import FaUserSecret from 'react-icons/lib/fa/user-secret';
import { Text } from '../';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`

  /* 글자 */
  text-align: center;

  /* 패딩 및 마진 */

  padding-top: 2rem;
  padding-bottom: 2rem;

  /* 색상 */

  background-color: ${(props) => props.backgroundColor ? props.backgroundColor : '#fff'};
  color: ${(props) => props.color ? props.color : '#000'}

`;

const Avatar = ({backgroundColor, color}) => (
  <Wrapper
    backgroundColor={backgroundColor}
    color={color}
    >
    <User size={100}/>
  </Wrapper>
)

Avatar.PropTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string
}

Avatar.defaultProps = {
  backgroundColor: '#fff',
  color: '#000'
}

export default Avatar;
