import React from 'react';
import oc from 'open-color';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import User from 'react-icons/lib/fa/user';
import FaUserSecret from 'react-icons/lib/fa/user-secret';
import { Text } from '../';
import { Link } from 'react-router-dom';
import { Avatar } from '../';

const Wrapper = styled.div`

  /* 포지션 */
  position: fixed;
  top: 0;
  left: 0;

  /* 색상 */
  background-color: white;

  /* 기타 */
  cursor: pointer;
  z-index: 15;

`;

const Slider = styled.div`
  /* 크기 및 높이 */
  height: 100vh;
  width: 250px;
`;


const SliderNav = ({
  visible,
  backgroundColor,
  status,
  onLogout,
  onSliderNavModal
}) => {
  const login = (
    <div>
      <Avatar backgroundColor={backgroundColor}/>
      <Text>
        <Link to="/mypage">마이페이지</Link>
      </Text>
      <Text onClick={() => onLogout() }>
        로그아웃
      </Text>
    </div>
  );

  const Notlogin = (
    <div>
      <Avatar backgroundColor="black">
        <FaUserSecret size={100}/>
      </Avatar>
      <Text onClick={() => onSliderNavModal() }>
        로그인 / 회원가입
      </Text>
    </div>
  )
  return (
    <Wrapper>
      <CSSTransitionGroup
        transitionName="slider"
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={1000}>
        {
          visible && (
            <Slider>
              { status ? login : Notlogin }
            </Slider>
          )
        }
      </CSSTransitionGroup>
    </Wrapper>
  )
};

SliderNav.PropTypes = {
  visible: PropTypes.bol,
  status: PropTypes.bol,
  backgroundColor: PropTypes.string,
  onLogout: PropTypes.func,
  onSliderNavModal: PropTypes.func
}

SliderNav.defaultProps = {
  visible: false,
  backgroundColor: '#e64980',
  status: false,
  onLogout: () => { console.error('onLogout not defined') },
  onSliderNavModal: () => { console.error('onSliderNavModal not defined' )}
}

export default SliderNav;
