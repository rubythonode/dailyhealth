import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import { ModalWrapper } from '../';
import { Content, Logo } from './';

const ButtonLists = styled.div`
  width: 100%;
  height: 3rem;
`;
const Button = styled.div`
  display: inline-block;
  width: 50%;
  height: 3rem;
  text-align: center;
  line-height: 3rem;
  color: white;
  cursor: pointer;

  &.yes {
    background-color: ${oc.blue[6]};
    &:hover {
      background-color: ${oc.blue[5]};
    }
  }

  &.no {
    background-color: ${oc.red[6]};
    &:hover {
      background-color: ${oc.red[5]};
    }
  }
`;

const HelperModal = ({visible, onNotConnect, onConnect}) => (
  <ModalWrapper visible={visible}>
    <Logo text="Daily Health"/>
    <Content>
      <p>이미 가입이 되어있어요!</p>
      <p>해당 계정과 연동하시겠어요?</p>
      <ButtonLists>
        <Button className="yes" onClick={() => { onConnect() }}>네</Button>
        <Button className="no" onClick={() => { onNotConnect() }}>아니요</Button>
      </ButtonLists>
    </Content>
  </ModalWrapper>
);

export default HelperModal;
