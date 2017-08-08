import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dimmed } from '../components';

class DimmedContainer extends Component {

  render() {
    return (
      <Dimmed {...this.props}/>
    );
  }

}

export default connect(
  (state) => ({
    visible: state.base.getIn(['dimmed', 'visible'])
  })
)(DimmedContainer);
