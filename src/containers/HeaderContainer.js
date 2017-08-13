import React, { Component } from 'react';
import { Header } from '../components';
import PropTypes from 'prop-types';

class HeaderContainer extends Component {

  render() {
    const {
      onModal
    } = this.props;
    return (
      <Header onModal={onModal}/>
    );
  }

}

HeaderContainer.PropTypes = {
  onModal: PropTypes.func
}

HeaderContainer.defaultProps = {
  onModal: () => { console.error('onModal not defined') }
}

export default HeaderContainer;
