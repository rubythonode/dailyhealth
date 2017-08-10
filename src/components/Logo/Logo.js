import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  /* 수평 정렬 */
  line-height: 4rem;

  /* 디스플레이 */
  display: inline-block;

  /* 기타 */
  cursor: pointer;

  & > a {
    /* 글꼴 */
    text-decoration: none;

    /* 색상 */
    color: ${oc.pink[6]};

    /* 글자 */
    font-weight: 600;
    font-size: 2rem;
  }
`;

const Logo = () => (
  <Wrapper>
    <Link to="/">Daily Health</Link>
  </Wrapper>
);

export default Logo;
