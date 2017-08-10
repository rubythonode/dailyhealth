import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Content, Text, Button, Align } from '../';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  /* 화면 설정 */
  background-size: cover;
  background: linear-gradient(0deg, #21abc7, #616db3);

  /* 크기 및 높이 */
  height: 100vh;
  width: 100%;

  /* 수직 및 수평 정렬 */
  display: flex;
  justify-content: center;
  align-items: center;

  /* 플럭스 박스 정렬 */
  flex-direction: column;
`;

const Background = () => (
  <Wrapper>
    <Content>
      <Text fontSize="2rem">
        매일 매일 당신의 운동 목표 달성을 기록하세요
      </Text>
      <Text fontSize="1.5rem">
        운동 영상을 따라하며 기록하세요
      </Text>
      <Align align="center">
        <Link to="/daily">
          <Button text="구경가기" backgroundColor={oc.pink[7]} size="5rem" />
        </Link>
      </Align>
    </Content>
  </Wrapper>
);

Background.PropTypes = {

}

Background.defaultProps = {

}

export default Background;
