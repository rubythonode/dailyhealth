import React, { Component } from 'react';
import { Header } from '../components';
import PropTypes from 'prop-types';

class HeaderContainer extends Component {

  render() {
    const {
      onModal,
      onLogout,
      status,
      color,
      onSliderNav
    } = this.props;
    return (
      <Header
        onModal={onModal}
        status={status}
        onLogout={onLogout}
        color={color}
        onSliderNav={onSliderNav}
      />
    );
  }

}

HeaderContainer.PropTypes = {
  onModal: PropTypes.func,
  onLogout: PropTypes.func,
  status: PropTypes.bol,
  color: PropTypes.string,
  onSliderNav: PropTypes.func
}

HeaderContainer.defaultProps = {
  status: false,
  color: '#fff',
  onLogout: () => { console.error('onLogout not defined') },
  onModal: () => { console.error('onModal not defined') },
  onSliderNav: () => { console.error('onSliderNav not defined') },
}

export default HeaderContainer;
