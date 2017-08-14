import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import PropTypes from 'prop-types';

const Wrapper = styled.div`

  /* 패딩 및 마진 */
  padding: ${(props) => props.padding ? props.padding : '1rem'};

  /* 테두리 */
  border-bottom: 1px solid #ccc;
`;

const Item = ({children, padding}) => (
  <Wrapper
    padding={padding}
    >
    {children}
  </Wrapper>
)

Item.PropTypes = {
  padding: PropTypes.string
}

Item.defaultProps = {
  padding: '1rem'
}

export default Item;
