import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  /* 중앙 정렬 */
  margin: 0 auto;

  /* 크기 */
  width: 998px;

  /* 패딩 및 마진 */
  padding-top: 5rem;


`;

const Container = ({children}) => (
  <Wrapper>
    {children}
  </Wrapper>
);


export default Container;
