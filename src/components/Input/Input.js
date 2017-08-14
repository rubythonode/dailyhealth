import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import PropTypes from 'prop-types';

const Wrapper = styled.input`
  /* 테두리 처리 */
  outline: none;
  border: 1px solid ${oc.gray[3]};

  /* 크기 */
  width: 100%;
  padding: 0.5rem;
  font-size: 1.25rem;

  /* 위치 */
  margin-bottom: 1rem;

  &:focus {
    border: 1px solid ${oc.pink[6]};
  }
`;

const Input = ({...props, disabled}) => (
  <Wrapper {...props} disabled={disabled ? disabled : ''}/>
)

Input.PropTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bol
}

Input.defaultProps = {
  type: '',
  placeholder: '',
  name: '',
  onChange: () => { console.error('onChange not defined') },
  disabled: ''
}

export default Input;
