import React, { Component } from 'react';
import { Dimmed } from '../components';
import PropTypes from 'prop-types';

class DimmedContainer extends Component {

  render() {
    const { dimmedVisible, onLoginModal } = this.props;
    return (
      <Dimmed dimmedVisible={dimmedVisible} onLoginModal={onLoginModal}/>
    );
  }
}

DimmedContainer.PropTypes = {
  dimmedVisible: PropTypes.bol,
  onLoginModal: PropTypes.func
}

DimmedContainer.defaultProps = {
  dimmedVisible: false,
  onLoginModal: () => { console.error('onLoginModal not defined') }
}

export default DimmedContainer;
