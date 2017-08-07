import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// 라우터 불러오기
import { Main, About } from './routes';

// 컴포넌트 불러오기
  // Base
import { Header } from '../components';
  // Common
import { Layout, Modal, LoginModal } from '../components';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Header/>
          
          <Layout>
            <Route exact path="/" component={Main} />
            <Route path="/about" component={About} />
          </Layout>

          <Modal>
            <LoginModal/>
          </Modal>
        </div>
      </Router>
    );
  }
}

export default App;
