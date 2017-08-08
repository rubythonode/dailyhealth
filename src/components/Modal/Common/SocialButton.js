import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import GoogleIcon from 'react-icons/lib/fa/google';
import FacebookIcon from 'react-icons/lib/fa/facebook';

const Social = styled.div`

  /* 색상 */
  color: white;

  /* 글자 */
  text-align: center;
  font-weight: bold;

  /* 크기 */
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  margin-top: 0.5rem;

  /* 테두리 */
  border-radius: 4px;

  /* 기타 */
  cursor: pointer;

  &.google {
    background-color: ${oc.red[6]};

    &:hover {
      background-color: ${oc.red[5]};
    }
  }

  &.facebook {
    background-color: ${oc.blue[6]};

    &:hover {
      background-color: ${oc.blue[5]};
    }
  }
`;

const SocialButton = () => (
  <div>
    <Social className="google">
      <GoogleIcon size={20}/> 구글로 로그인하기
    </Social>
    <Social className="facebook">
      <FacebookIcon size={20}/> 페이스북으로 로그인하기
    </Social>
  </div>
)
export default SocialButton;
