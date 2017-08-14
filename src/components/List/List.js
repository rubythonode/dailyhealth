import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Wrapper = styled.div`

  /* 색상 */
  background-color: white;

  /* 그림자 */
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.2);

  /* 기타 */

  cursor: pointer;
`;

const List = ({children}) => (
  <Wrapper>
    {children}
  </Wrapper>
)

export default List;
