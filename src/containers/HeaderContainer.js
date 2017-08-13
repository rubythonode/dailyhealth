import React, { Component } from 'react';
import { Header } from '../components';
import PropTypes from 'prop-types';

class HeaderContainer extends Component {

  render() {
    const {
      onModal,
      onLogout,
      status
    } = this.props;
    return (
      <Header onModal={onModal} status={status} onLogout={onLogout}/>
    );
  }

}

HeaderContainer.PropTypes = {
  onModal: PropTypes.func,
  onLogout: PropTypes.func,
  status: PropTypes.bol
}

HeaderContainer.defaultProps = {
  status: false,
  onLogout: () => { console.error('onLogout not defined') },
  onModal: () => { console.error('onModal not defined') }
}

export default HeaderContainer;
