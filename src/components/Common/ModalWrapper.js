import React, { Component } from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 15;
`;

class ModalWrapper extends Component {

  render() {
    const { visible, children } = this.props;

    return (
      <Wrapper>
        {
            visible && <div>{children}</div>
        }
      </Wrapper>
    );
  }

}

export default ModalWrapper;
