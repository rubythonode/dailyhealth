import React, { Component } from 'react';
import { Header } from '../components';
import PropTypes from 'prop-types';

class HeaderContainer extends Component {

  render() {
    const {
      onModal,
      status
    } = this.props;
    return (
      <Header onModal={onModal} status={status}/>
    );
  }

}

HeaderContainer.PropTypes = {
  onModal: PropTypes.func,
  status: PropTypes.bol
}

HeaderContainer.defaultProps = {
  status: false,
  onModal: () => { console.error('onModal not defined') }
}

export default HeaderContainer;
