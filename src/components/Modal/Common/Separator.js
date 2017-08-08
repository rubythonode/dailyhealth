import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Wrapper = styled.div`
  display: block;
  width: 100%;
  background-color: ${oc.gray[3]};
  height: 1px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  position: relative;
`;

const Or = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.2rem;
`;

const Separator = () => (
  <Wrapper>
    <Or>
      OR
    </Or>
  </Wrapper>
);

export default Separator;
