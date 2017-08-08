import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const ContainerWrapper = styled.div`
  /* 헤더 크기만큼 아래로 */
  padding-top: 4rem;
`;


const Container = styled.div`

  /* 크기 */
  width: 998px;

  /* 위치 */
  margin: 0 auto;
`;

const Wrapper = ({children}) => (
  <ContainerWrapper>
    <Container>
      {children}
    </Container>
  </ContainerWrapper>
)

export default Wrapper;
