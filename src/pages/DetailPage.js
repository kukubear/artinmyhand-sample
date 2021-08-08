import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/common/Navbar';
import Contents from '../components/layout/Contents';
import { AiFillHeart } from 'react-icons/ai';
import palette from '../styles/palette';
import { Link } from 'react-router-dom';

const DetailWrap = styled.div``;
const MainImgBlock = styled.div`
  width: 100%;
  height: auto;
  margin-top: 10px;
`;
const Image = styled.div`
  border-radius: 20px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }
`;
const ButtonBlock = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
const FundingButton = styled.div`
  width: 81.65%;
  height: 100%;
  background-color: ${palette.orange[0]};
  border-radius: 30px;
  display: flex;
  align-items: center;

  justify-content: center;
  color: white;
  font-size: 16px;
  font-weight: 700;
`;

const HeartIconButton = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #828282;
`;

const IntroBlock = styled.div`
  width: 100%;
  margin-top: 30px;
`;

const Title = styled.div`
  color: #000;
  font-size: 26px;
  letter-spacing: 0.0075em;
  margin-bottom: 7px;
  font-weight: 700;
  p {
    word-break: break-all;
    white-space: pre-line;
    margin: 0;
  }
`;
const Explain = styled.div`
  color: #828282;
  margin-bottom: 25px;
  p {
    margin: 0;
  }
`;

const DetailPage = () => {
  return (
    <DetailWrap>
      <Navbar back={true}></Navbar>
      <Contents>
        <MainImgBlock>
          <Image>
            <img src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" />
          </Image>
          <Link to="/account">
            <ButtonBlock>
              <FundingButton>펀딩하기</FundingButton>
              <HeartIconButton>
                <AiFillHeart size={24} color={palette.orange[0]} />
              </HeartIconButton>
            </ButtonBlock>
          </Link>
        </MainImgBlock>
        <IntroBlock>
          <Title>
            <p>Agent #711</p>
          </Title>
          <Explain>
            <p>Galactic Secret Agency is a collection of</p>
            <p style={{ marginTop: '5px' }}>10,000 unique Alien Agents.</p>
          </Explain>
          <Title>
            <p>Andreas</p>
          </Title>
        </IntroBlock>
      </Contents>
    </DetailWrap>
  );
};

export default DetailPage;
