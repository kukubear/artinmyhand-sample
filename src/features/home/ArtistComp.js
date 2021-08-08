import React from 'react';
import styled from 'styled-components';
import { AiFillHeart } from 'react-icons/ai';
import palette from '../../styles/palette';
const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
  align-items: center;
`;

const ArtsitBlock = styled.div`
  display: flex;
  align-items: center;
`;
const Index = styled.div`
  font-size: 16px;
  color: #000;
  font-weight: bold;
`;
const ArtistImgBlock = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  margin-left: 20px;
  margin-right: 16px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }
`;

const InfoBlock = styled.div``;

const Name = styled.div`
  color: #000;
`;
const ArtName = styled.div`
  color: rgba(0, 0, 0, 0.618);
`;
const ScoreBlock = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;
const Heart = styled.div`
  color: ${palette.orange[0]};
`;
const Score = styled.div`
  color: rgba(0, 0, 0, 0.618);
  margin-right: 7px;
`;

const GrayLine = styled.div`
  height: 1px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.1);
`;

const ArtistComp = ({ index, src, name, artName, score }) => {
  return (
    <>
      <Wrap>
        <ArtsitBlock>
          <Index>{index + 1}</Index>
          <ArtistImgBlock>
            <img src={src} alt={index} />
          </ArtistImgBlock>
          <InfoBlock>
            <Name>{name}</Name>
            <ArtName>{artName}</ArtName>
          </InfoBlock>
        </ArtsitBlock>
        <ScoreBlock>
          <Heart>
            <AiFillHeart size={19} />
          </Heart>
          <Score>{score}</Score>
        </ScoreBlock>
      </Wrap>
      {index !== 2 && <GrayLine></GrayLine>}
    </>
  );
};

export default ArtistComp;
