import React, { Component } from 'react';
import { Container, Content, List, Item, Text, Avatar, Input, Button, MyPageContainer } from '../../';
import { Grid, Cell } from 'react-mdl';
import oc from 'open-color';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from '../../../store/modules/base';
import * as authActions from '../../../store/modules/auth';
import auth from '../../../api/auth';
import users from '../../../api/users';
import alertify from 'alertifyjs';
import { Redirect } from 'react-router-dom';
class MyPage extends Component {

  componentDidMount() {
    const { AuthActions } = this.props;

    auth.onAuthStateChanged((firebaseUser) => {
      if(firebaseUser) {
        users.findUserById(firebaseUser.uid).then((user) => {
          const { email, displayName } = user.val();

          AuthActions.initialEmailDisplayname({email, displayName})
          AuthActions.initialUserInfomation(user.val());

        })
      }
    })
  }


  handleMyPageVisible = (visible) => {
    const { BaseActions, form } = this.props;
    BaseActions.setMypageVisibility(visible);
  }

  handleChangeInput = (e) => {
    const { AuthActions } = this.props;
    const { name, value } = e.target;
    AuthActions.changeInput({name, value})
  }

  handleDisplayChange = () => {
    const { form, uid } = this.props;
    if(form.toJS().displayname == "") {
      alertify.error('비어있어요! 별명을 입력해주세요!')
      return;
    }

    users.createDisplayName(uid, form.toJS().displayname)
    alertify.success('변경되었어요!')
  }

  render() {
    const {
      mypageVisible,
      userStatus,
      userInfomation,
      form
    } = this.props;

    const {
      handleMyPageVisible,
      handleChangeInput,
      handleDisplayChange
    } = this;
    return (
      <Container>
        {
          !userStatus && <Redirect to="/" />
        }
        <Grid>
          <Cell col={4}>
            <List>
              <Item onClick={() => { handleMyPageVisible('account') }}>계정</Item>
              <Item onClick={() => { handleMyPageVisible('statistics') }}>통계</Item>
              <Item>탈퇴</Item>
            </List>
          </Cell>
          <Cell col={8}>
            <MyPageContainer visible={mypageVisible === "account"}>
              <List>
                <Item>
                  <Text textAlign="left" padding="0" fontSize="1rem">계정</Text>
                  <Text textAlign="left" padding="0" fontSize="0.8rem" color={oc.gray[5]}>계정 정보를 수정하세요.</Text>
                </Item>
                <Item>
                  <Avatar/>
                </Item>
                <Item>
                  <Text textAlign="left" padding="0.3rem" fontSize="1rem" >이메일</Text>
                  <Input
                    type="email"
                    placeholder="이메일을 입력하세요"
                    name="email"
                    onChange={(e) => handleChangeInput(e)}
                    value={form.toJS().email || ''}
                    disabled={true}
                    />
                  <Text textAlign="left" padding="0.3rem" fontSize="1rem">별명</Text>
                  <Input
                    type="text"
                    placeholder="별명을 입력하세요"
                    name="displayname"
                    onChange={(e) => handleChangeInput(e)}
                    value={form.toJS().displayname || ''}
                    />

                  <Button
                    text="전송"
                    width="100%"
                    backgroundColor={oc.pink[5]}
                    onClick={handleDisplayChange}
                    />
                </Item>
              </List>
            </MyPageContainer>
            <MyPageContainer visible={mypageVisible === "statistics"}>
              통계다다아아앙아아
            </MyPageContainer>
          </Cell>
        </Grid>
      </Container>
    );
  }

}

export default connect(
  (state) => ({
    mypageVisible: state.base.getIn(['mypage', 'visible']),
    userStatus: state.auth.getIn(['user', 'status']),
    uid: state.auth.getIn(['user', 'uid']),
    userInfomation: state.auth.get('userInfomation'),
    form: state.auth.get('form')
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch),
    AuthActions: bindActionCreators(authActions, dispatch)
  })
)(MyPage);
