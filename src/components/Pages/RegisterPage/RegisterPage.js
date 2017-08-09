import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HeaderContainer } from '../../../containers';
import { Wrapper, Background, Content, TabMenu } from '../../';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect, withRouter } from 'react-router-dom';
import { Logo } from '../../Modal';
import AckDisplayName from './AckDisplayName';
import SimpleIntroduce from './SimpleIntroduce';

class RegisterPage extends Component {
  render() {
    const { login, history } = this.props;
    const checklocation = history.location.pathname;
    return (
      <div>
        {
            !login && <Redirect to="/" />
        }
        <HeaderContainer/>
        <Background>
          <Content>
            <TabMenu right={checklocation === '/register/displayname'}/>
            <Logo text="추가정보"/>
            <div>
              <Route exact path="/register" component={SimpleIntroduce}/>
              <Route path="/register/displayname" component={AckDisplayName} />
            </div>
          </Content>
        </Background>
      </div>
    );
  }

}

export default connect(
  (state) => ({
    login: state.auth.getIn(['auth', 'login'])
  })
)(withRouter(RegisterPage));
