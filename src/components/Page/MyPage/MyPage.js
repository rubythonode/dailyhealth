import React, { Component } from 'react';
import { Container, Content, List, Item, Text, Avatar, Input } from '../../';
import { Grid, Cell } from 'react-mdl';
import oc from 'open-color';

class MyPage extends Component {
  render() {
    return (
      <Container>
        <Grid>
          <Cell col={4}>
            <List>
              <Item>계정</Item>
              <Item>통계</Item>
              <Item>탈퇴</Item>
            </List>
          </Cell>
          <Cell col={8}>
            <List>
              <Item>
                <Text textAlign="left" padding="0" fontSize="1rem">계정</Text>
                <Text textAlign="left" padding="0" fontSize="0.8rem" color={oc.gray[5]}>계정 정보를 수정하세요.</Text>
              </Item>
              <Item>
                <Avatar/>
              </Item>
              <Item>
                <Text textAlign="left" padding="0" fontSize="1rem">이메일</Text>
              </Item>
            </List>
          </Cell>
        </Grid>
      </Container>
    );
  }

}

export default MyPage;
