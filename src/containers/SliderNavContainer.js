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
      slidernavVisible
    } = this.props;
    return (
      <SliderNav visible={slidernavVisible}/>
    );
  }

}

SliderNavContainer.PropTypes = {
  slidernavVisible: PropTypes.bol
}

SliderNavContainer.defaultProps = {
  slidernavVisible: false
}

export default connect(
  (state) => ({

  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(onClickOutside(SliderNavContainer));
