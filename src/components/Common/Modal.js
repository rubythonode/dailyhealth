import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import ClickOutside from 'react-click-outside';

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 10;

  @media (max-width: 900px) {
    width: calc(100% - 2rem);
  }

  @media (max-width: 600px) {
    width: calc(100% - 1rem);
  }
`;

class Modal extends Component {

  handleClickOutside = () => {
    const { visible, onHide } = this.props;
    onHide();
  }

  render() {
    const { children, visible, onHide } = this.props;
    return (
      <Wrapper>
        {
          visible ? <div>{children}</div> : null
        }
      </Wrapper>
    );
  }

}

export default ClickOutside(Modal);
