import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';


const Wrapper = styled.div`
  /* 크기 */
  padding-top: 1rem;
  padding-bottom: 1rem;

  /* 색상 */
  background-color: ${oc.pink[6]};
  color: white;

  /* 폰트 */
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
`;

const Logo = () => (
  <Wrapper>
    Daily Health
  </Wrapper>
)

export default Logo;
