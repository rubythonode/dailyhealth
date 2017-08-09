import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  /* 수평 정렬 */
  line-height: 4rem;


  /* 크기 */
  font-size: 1.5rem;
  font-weight: bold;
  display: inline-block;


  /* 기타 */
  cursor: pointer;

  & > a {
    text-decoration: none;
    color: ${oc.pink[6]};
  }
`;

const Logo = () => (
  <Wrapper>
    <Link to="/">Daily Health</Link>
  </Wrapper>
);

export default Logo;
