import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Wrapper = styled.div`
  /* 수평 정렬 */
  line-height: 4rem;


  /* 크기 */
  font-size: 1.5rem;
  font-weight: bold;
  display: inline-block;


  /* 색상 */
  color: ${oc.pink[6]};

  /* 기타 */
  cursor: pointer;
`;

const Logo = ({onLogout}) => (
  <Wrapper onClick={() => { onLogout() }}>
    Daily Health
  </Wrapper>
);

export default Logo;
