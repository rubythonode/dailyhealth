import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  /* 디스플레이 */
  display: flex;
  justify-content: center;
  align-items: center;

  /* 기타 */
  cursor: pointer;
`;

const Button = styled.div`
  /* 디스플레이 */
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  /* 크기 및 높이 */
  height: 4rem;

  /* 색상 */
  color: white;


  &.yes {
    background-color: ${oc.blue[5]};
    &:hover {
      background-color: ${oc.blue[4]};
    }
  }

  &.no {
    background-color: ${oc.red[5]};
    &:hover {
      background-color: ${oc.red[4]};
    }
  }
`;

const AckButton = ({
  onModal,
  onConnectOauth,
  email
}) => (
  <Wrapper>
    <Button className="yes" onClick={() => { onConnectOauth(email) }}>네</Button>
    <Button className="no" onClick={() => { onModal(false) }}>아니요</Button>
  </Wrapper>
);

AckButton.PropTypes = {
  email: PropTypes.string,
  onModal: PropTypes.func,
  onConnectOauth: PropTypes.func
}

AckButton.defaultProps = {
  email: '',
  onModal: () => { console.error('onModal not defined') },
  onConnectOauth: () => { console.error('onConnectOauth not defined') }
}

export default AckButton;
