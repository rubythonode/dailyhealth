import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Wrapper = styled.div`
  padding: 1rem;
  background: white;
`;

const SimpleIntroduce = () => {
  return (
    <Wrapper>
      데일리 헬스에 가입해주셔서 감사해요! 데일리 헬스는 운동 목표를 기록할 수 있는 서비스입니다
    </Wrapper>
  )
}

export default SimpleIntroduce;
