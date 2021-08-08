import React from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';

const ItemWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 9px 0;
  height: 50px;
`;

const Left = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: #000;
`;
const At = styled.div`
  font-weight: normal;
  font-size: 14px;
  color: ${palette.gray[1]};
`;
const Right = styled.div`
  color: ${({ color }) => color};
  font-weight: 500;
  font-size: 16px;
`;

const AccountItem = ({ title, at, money, color }) => {
  return (
    <ItemWrap>
      <Left>
        <Title>{title}</Title>
        <At>{at}</At>
      </Left>
      <Right color={color}>{money}</Right>
    </ItemWrap>
  );
};

export default AccountItem;
