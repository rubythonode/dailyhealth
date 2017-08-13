import React, { Component } from 'react';
import { AccountExistModal } from '../components';
import PropTypes from 'prop-types';

class AccountExistModalContainer extends Component {
  render() {
    const {
      accountExistModalVisible,
      email,
      onModal,
      onConnectOauth
    } = this.props;
    return (
      <AccountExistModal
        accountExistModalVisible={accountExistModalVisible}
        email={email}
        onModal={onModal}
        onConnectOauth={onConnectOauth}
      />
    );
  }
}

AccountExistModalContainer.PropTypes = {
  accountExistModalVisible: PropTypes.bol,
  email: PropTypes.string,
  onModal: PropTypes.func,
  onConnectOauth: PropTypes.func
}

AccountExistModalContainer.defaultProps = {
  accountExistModalVisible: false,
  email: '',
  onModal: () => { console.error('onModal not defined') },
  onConnectOauth: () => { console.error('onConnectOauth not defined') }
}

export default AccountExistModalContainer;
