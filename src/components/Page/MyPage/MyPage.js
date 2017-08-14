import React, { Component } from 'react';
import { Container, Content, List, Item, Text, Avatar, Input, Button, MyPageContainer } from '../../';
import { Grid, Cell } from 'react-mdl';
import oc from 'open-color';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from '../../../store/modules/base';

class MyPage extends Component {

  handleMyPageVisible = (visible) => {
    const { BaseActions } = this.props;
    BaseActions.setMypageVisibility(visible);
  }
  render() {
    const {
      mypageVisible,
    } = this.props;

    const {
      handleMyPageVisible
    } = this;
    return (
      <Container>
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
                  <Text textAlign="left" padding="0.3rem" fontSize="1rem">이메일</Text>
                  <Input/>
                  <Text textAlign="left" padding="0.3rem" fontSize="1rem">별명</Text>
                  <Input/>

                  <Button text="전송" width="100%" backgroundColor={oc.pink[5]}/>
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
    mypageVisible: state.base.getIn(['mypage', 'visible'])
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(MyPage);
