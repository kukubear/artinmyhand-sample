import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/common/Navbar';
import Contents from '../components/layout/Contents';
import palette from '../styles/palette';
import AccountItem from '../features/account/AccountItem';
const AccountWrap = styled.div``;

const MyAccountBlock = styled.div`
  width: 100%;
  margin-top: 10px;
`;
const Title = styled.div`
  margin-bottom: 8px;
  color: ${palette.gray[1]};
  span {
    font-weight: bold;
  }
`;
const Money = styled.div`
  color: #000;
  letter-spacing: -0.01em;
  font-size: 30px;
  font-weight: bold;
`;

const ButtonBlock = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
const Button = styled.div`
  height: 100%;
  width: 46.788%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  border-radius: 30px;
`;

const GrayLine = styled.div`
  margin: 35px 0;
  width: 100%;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1);
`;

const MonthlyBlock = styled.div`
  width: 100%;
`;

const MonthlyTitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  font-weight: bold;
`;
const MonthlyTitle = styled.div`
  color: ${palette.gray[1]};
`;
const MonthlyMoney = styled.div`
  color: #000;
`;

const MonthlyList = styled.div`
  width: 100%;
  margin-top: 25px;
  margin-bottom: 40px;
`;

const SubscribeButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 16px;
  color: white;
  height: 50px;
  border-radius: 30px;
  background-color: ${palette.orange[0]};
`;

const DATE_DATE = [
  {
    title: '카드 충전',
    at: '2021.07.05',
    money: '+50,000',
    color: palette.orange[0],
  },
  {
    title: '작가 펀딩 사용',
    at: '2021.07.01',
    money: '-10,000',
    color: palette.gray[1],
  },
  {
    title: '카드 충전',
    at: '2021.06.28',
    money: '+50,000',
    color: palette.orange[0],
  },
];

const AccountPage = () => {
  return (
    <AccountWrap>
      <Navbar back={true}></Navbar>
      <Contents>
        <MyAccountBlock>
          <Title>
            <span>김상미</span>님의 총 자산
          </Title>
          <Money>500,000원</Money>
          <ButtonBlock>
            <Button
              style={{
                color: 'white',
                backgroundColor: `${palette.orange[0]}`,
              }}
            >
              충전
            </Button>
            <Button
              style={{
                color: '#000',
                backgroundColor: `${palette.gray[0]}`,
              }}
            >
              인출
            </Button>
          </ButtonBlock>
        </MyAccountBlock>
        <GrayLine></GrayLine>
        <MonthlyBlock>
          <MonthlyTitleBlock>
            <MonthlyTitle>이번 달 총혜택</MonthlyTitle>
            <MonthlyMoney>100,000원</MonthlyMoney>
          </MonthlyTitleBlock>
          <MonthlyList>
            {DATE_DATE.map((data, index) => (
              <AccountItem
                title={data.title}
                at={data.at}
                money={data.money}
                color={data.color}
              ></AccountItem>
            ))}
          </MonthlyList>
        </MonthlyBlock>
        <SubscribeButton>구독하기</SubscribeButton>
      </Contents>
    </AccountWrap>
  );
};

export default AccountPage;
