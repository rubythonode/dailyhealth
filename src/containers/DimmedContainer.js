import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dimmed } from '../components';

class DimmedContainer extends Component {

  render() {
    const { Modalvisible, HelperModalvisible } = this.props;
    return (
      <Dimmed visible={Modalvisible | HelperModalvisible}/>
    );
  }

}

export default connect(
  (state) => ({
    Modalvisible: state.base.getIn(['dimmed', 'visible']),
    HelperModalvisible: state.base.getIn(['helperModal', 'visible'])
  })
)(DimmedContainer);
