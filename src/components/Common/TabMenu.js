import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link } from 'react-router-dom';
// const Wrapper = styled.div`
//
//   width: 400px;
//   display: flex;
//   height: 4rem;
//
//   & > a {
//     flex: 1;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background-color: white;
//     color: black;
//     text-decoration: none;
//     &.item {
//       background-color: ${oc.pink[5]};
//       color: white;
//     }
//   }
// `;

const Wrapper = styled.div`
  height: 4rem;
  background-color: white;
  width: 100%;
  display: flex;
  position: relative;
`;

const StyledItem = styled.div`
    height: 100%;

    flex: 1;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${oc.gray[6]};

    font-size: 1.5rem;
    cursor: pointer;

    &:hover {
        background: ${oc.gray[0]};
    }

    & > a {
      text-decoration: none;
      color: ${oc.gray[6]};
    }
`;

const Bar = styled.div`
    /* 레이아웃 */
    position: absolute;
    bottom: 0px;
    height: 3px;
    width: 50%;
    transition: ease-in .25s;
    /* 색상 */
    background: ${oc.pink[6]};

    transform: ${props => props.right ? 'translateX(100%)' : 'none'};
`;

const Item = ({children}) => (
    <StyledItem>
        {children}
    </StyledItem>
);


const TabMenu = ({right}) => (
    <Wrapper>
        <Item><Link to="/register">소개</Link></Item>
        <Item><Link to="/register/displayname">설정</Link></Item>
        <Bar right={right}/>
    </Wrapper>
);

export default TabMenu;
