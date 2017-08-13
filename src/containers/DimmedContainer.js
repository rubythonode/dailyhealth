import React, { Component } from 'react';
import { Dimmed } from '../components';
import PropTypes from 'prop-types';

class DimmedContainer extends Component {

  render() {
    const { dimmedVisible, onModal } = this.props;
    return (
      <Dimmed dimmedVisible={dimmedVisible} onModal={onModal}/>
    );
  }
}

DimmedContainer.PropTypes = {
  dimmedVisible: PropTypes.bol,
  onModal: PropTypes.func
}

DimmedContainer.defaultProps = {
  dimmedVisible: false,
  onModal: () => { console.error('onModal not defined') }
}

export default DimmedContainer;
