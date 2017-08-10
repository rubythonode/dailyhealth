import React, { Component } from 'react';
import { Header } from '../components';
import PropTypes from 'prop-types';

class HeaderContainer extends Component {

  render() {
    const {
      onLoginModal
    } = this.props;
    return (
      <Header onLoginModal={onLoginModal}/>
    );
  }

}

HeaderContainer.PropTypes = {
  onLoginModal: PropTypes.func
}

HeaderContainer.defaultProps = {
  onLoginModal: () => { console.error('onLoginModal not defined') }
}

export default HeaderContainer;
