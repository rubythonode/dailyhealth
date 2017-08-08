import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Wrapper = styled.div`
  /* 색상 */
  background-color: ${oc.pink[6]};
  color: white;

  /* 글자 */
  text-align: center;
  text-weight: bold;

  /* 크기 */
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  /* 테두리 */
  border-radius: 4px;

  /* 기타 */
  cursor: pointer;

  &:hover {
    background-color: ${oc.pink[5]};
  }
`;

const SubmitButton = ({text, onAuth}) => (
  <Wrapper onClick={() => { onAuth() }}>
    {text}
  </Wrapper>
)
export default SubmitButton;
