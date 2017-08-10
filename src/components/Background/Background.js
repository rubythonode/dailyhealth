import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  /* 화면 설정 */
  background-size: cover;
  background: linear-gradient(0deg, #21abc7, #616db3);

  /* 높이 및 크기 */
  width: 100%;
  height: 100vh;

  /* 정렬 */
  display: flex;
  justify-content: center;
  align-items: center;

  /* 플럭스 박스 설정 */
  flex-direction: column;
`;

const Background = ({children}) => (
  <Wrapper>
    {children}
  </Wrapper>
);

Background.PropTypes = {
  
}

Background.defaultProps = {

}

export default Background;
