import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Content, Text, Button, Align, Input } from '../';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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

const Margin = styled.div`
  margin-top: 1rem;
  margin-bottom : 1rem;
`;
const Background = ({loginstatus, onDisplayname, onCreateDisplayName}) => {
  const basic = (
    <div>
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
    </div>
  )
  const displayname = (
    <div>
      <Text fontSize="2rem">
        사용할 별명을 정하세요
      </Text>
      <Margin>
        <Input type="text" placeholder="별명을 입력하세요" name="displayname" onChange={(e) => onDisplayname(e)}/>
      </Margin>
      <Align align="center">
        <Button text="저장" backgroundColor={oc.pink[7]} size="6rem" onClick={() => { onCreateDisplayName() }}/>
      </Align>

    </div>
  )
  return (
    <Wrapper>
      <Content>
        { loginstatus === true ? displayname : basic }
      </Content>
    </Wrapper>
  )
};


Background.PropTypes = {
  loginstatus: PropTypes.bol,
  onDisplayname: PropTypes.func,
  onCreateDisplayName: PropTypes.func
}

Background.defaultProps = {
  loginstatus: false,
  onDisplayname: () => { console.error('onDisplayname not defined') },
  onCreateDisplayName: () => { console.error('onCreateDisplayName not defined') }
}

export default Background;
