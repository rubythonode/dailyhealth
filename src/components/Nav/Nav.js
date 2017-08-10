import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const Wrapper = styled.div`
  float: right;
  /* 반응형 */
  
  @media (max-width: 600px) {
    display: none;
  }
`;

const Nav = ({children}) => (
  <Wrapper>
    {children}
  </Wrapper>
);

Nav.PropTypes = {

}

Nav.defaultProps = {

}

export default Nav;
