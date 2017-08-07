import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// 라우터 불러오기
import { Main, About } from './routes';

// 컴포넌트 불러오기
  // Base
import { Header } from '../components';
  // Common
import { Layout, Modal, AuthModal, Dimmed } from '../components';

class App extends Component {
  state = {
    modalvisible: false,
    modal: {
      mode: 'auth',
      status: 'login'
    }
  }

  handleModalShow = () => {
    this.setState({
      modalvisible: true,
      modal: {
        status: 'login'
      }
    });
  }

  handleModalHide = () => {
    this.setState({
      modalvisible: false
    })
  }

  handleAuthMode = (status) => {
    this.setState({
      modal: {
        status
      }
    })
  }

  render() {
    const { modalvisible } = this.state;
    const { mode, status } = this.state.modal;

    const { handleModalShow, handleModalHide, handleAuthMode } = this;

    return (
      <Router>
        <div>
          <Header onShow={handleModalShow}/>

          <Layout>
            <Route exact path="/" component={Main} />
            <Route path="/about" component={About} />
          </Layout>

          <Modal visible={modalvisible} onHide={handleModalHide}>
            <AuthModal status={status} handleAuthMode={handleAuthMode}/>
          </Modal>
          <Dimmed visible={modalvisible}/>
        </div>
      </Router>
    );
  }
}

export default App;
