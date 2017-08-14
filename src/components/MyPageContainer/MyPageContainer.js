import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import PropTypes from 'prop-types';

const MyPageContainer = ({children, visible}) =>  visible ? (
  <div>
    {children}
  </div>
) : null

MyPageContainer.PropTypes = {
  visible: PropTypes.bol
}

MyPageContainer.defaultProps = {
  visible: true // 추후에 꼭 false로 바꿔라
}

export default MyPageContainer;
