import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as baseActions from '../modules/base';
import { HomePage, DailyPage } from './Pages';
import { Dimmed } from './';
import { LoginModalContainer, DimmedContainer } from '../containers';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomePage}/>
          <Route path="/daily" component={DailyPage}/>
          <LoginModalContainer/>
          <DimmedContainer/>
        </div>
      </Router>
    );
  }
}

export default connect(
  (state) => ({
    
  }),
  (dispatch) => ({

  })
)(App);
