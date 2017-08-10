import React, { Component } from 'react';
import { HeaderContainer } from '../../../containers';
import { Wrapper, Background } from '../../';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import alertify from 'alertifyjs';

class HomePage extends Component {

  render() {
    return (
      <div>
        <HeaderContainer/>
        <Background/>
      </div>
    );
  }

}

export default connect(
  (state) => ({
  })
)(withRouter(HomePage));
