import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { ModalWrapper, Content, Input, Text, Button, AuthControl } from '../';
import PropTypes from 'prop-types';
import GoogleIcon from 'react-icons/lib/fa/google';
import FacebookIcon from 'react-icons/lib/fa/facebook';

const LoginModal = ({
  modalVisible,
  onTask,
  task,
  onAuth,
  onChangeInput,
  onGoogleLogin
}) => {
  const Task = task === 'login' ? '로그인' : '회원가입';
  const ReverseTask = task === 'login' ? '회원가입' : '로그인';

  return (
    <ModalWrapper modalVisible={modalVisible}>
      <Content>
        <Text textAlign="left" fontSize="1.1rem" color={oc.gray[7]}>이메일로 회원가입</Text>
        <Input type="email" placeholder="이메일을 입력하세요" name="email" onChange={(e) => onChangeInput(e)}/>
        <Input type="password" placeholder="비밀번호를 입력하세요" name="password" onChange={(e) => onChangeInput(e)}/>
        <AuthControl onTask={onTask} ReverseTask={ReverseTask}/>
        <Button
          text={Task}
          backgroundColor={oc.gray[6]}
          width="100%"
          HoverbackgroundColor={oc.gray[5]}
          onClick={() => { onAuth() }}
          />
        <Text textAlign="center" fontSize="1rem" color={oc.gray[7]}>또는</Text>
        <Button
          text="구글로 로그인"
          backgroundColor={oc.red[6]}
          width="100%"
          HoverbackgroundColor={oc.red[5]}
          onClick={() => { onGoogleLogin() }}
          >
          <GoogleIcon size={20}/>
        </Button>
        <Button
          text="페이스북으로 로그인"
          backgroundColor={oc.blue[6]}
          width="100%"
          HoverbackgroundColor={oc.blue[5]}
          >
          <FacebookIcon size={20}/>
        </Button>
      </Content>
    </ModalWrapper>
  )
}

LoginModal.PropTypes = {
  modalVisible: PropTypes.bol,
  onTask: PropTypes.func,
  onAuth: PropTypes.func,
  onChangeInput: PropTypes.func,
  onGoogleLogin: PropTypes.func,
  task: PropTypes.string
}

LoginModal.defaultProps = {
  modalVisible: false,
  task: '',
  onTask: () => { console.error('onClick not defined') },
  onAuth: () => { console.error('onAuth not defined') },
  onChangeInput: () => { console.error('onChangeInput not defined') },
  onGoogleLogin: () => { console.error('onGoogleLogin not defined') }
}

export default LoginModal;
