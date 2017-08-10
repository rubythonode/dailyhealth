import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import PropTypes from 'prop-types';


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

Container.PropTypes = {

}

Container.defaultProps = {

}

export default Container;
