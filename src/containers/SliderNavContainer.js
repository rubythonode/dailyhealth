import React, { Component } from 'react';
import { SliderNav } from '../components';
import PropTypes from 'prop-types';
import onClickOutside from 'react-click-outside';
import * as baseActions from '../store/modules/base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class SliderNavContainer extends Component {
  handleClickOutside = (e) => {
    const { BaseActions } = this.props;
    BaseActions.setSliderNavVisibility(false)
  }
  render() {
    const {
      slidernavVisible,
      backgroundColor,
      status,
      onLogout,
      onSliderNavModal
    } = this.props;
    return (
      <SliderNav
        visible={slidernavVisible}
        backgroundColor={backgroundColor}
        status={status}
        onLogout={onLogout}
        onSliderNavModal={onSliderNavModal}
      />
    );
  }

}

SliderNavContainer.PropTypes = {
  slidernavVisible: PropTypes.bol,
  backgroundColor: PropTypes.string,
  status: PropTypes.bol,
  onLogout: PropTypes.func,
  onSliderNavModal: PropTypes.func
}

SliderNavContainer.defaultProps = {
  slidernavVisible: false,
  status: false,
  backgroundColor: '#e64980',
  onLogout: () => { console.error('onLogout not defined') },
  onSliderNavModal: () => { console.error('onSliderNavModal not defined') }
}

export default connect(
  (state) => ({

  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(onClickOutside(SliderNavContainer));
