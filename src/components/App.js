import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as baseActions from '../modules/base';
import { HomePage, DailyPage } from './Pages';
import { Dimmed } from './';
import { LoginModalContainer, DimmedContainer } from '../containers';
import auth from '../helpers/firebase/auth';

class App extends Component {
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if(user) {
        console.log('로그인 상태')
      } else {
        console.log('로그인이 안된 상태')
      }
    });
  }
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
