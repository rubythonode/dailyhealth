import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { ModalWrapper, Content, Text, AckButton } from '../';
import PropTypes from 'prop-types';

const AccountExistModal = ({
  email,
  accountExistModalVisible,
  onModal,
  onConnectOauth
}) => (
  <ModalWrapper modalVisible={accountExistModalVisible}>
    <Content>
      <Text textAlign="center" fontSize="1.7rem" color={oc.gray[7]}>
        이미 가입되어 있습니다.
      </Text>
      <Text textAlign="center" fontSize="1rem" color={oc.gray[5]}>
        기존 이메일({email})과 연동하시겠어요?
      </Text>
      <AckButton onModal={onModal} onConnectOauth={onConnectOauth} email={email}/>
    </Content>
  </ModalWrapper>
);

AccountExistModal.PropTypes = {
  accountExistModalVisible: PropTypes.bol,
  email: PropTypes.string,
  onModal: PropTypes.func,
  onConnectOauth: PropTypes.func
}

AccountExistModal.defaultProps = {
  accountExistModalVisible: false,
  email: '',
  onModal: () => { console.error('onModal not defined') },
  onConnectOauth: () => { console.error('onConnectOauth not defined') }
}

export default AccountExistModal;
