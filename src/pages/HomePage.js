import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Contents from '../components/layout/Contents';
import Navbar from '../components/common/Navbar';
import ArtistComp from '../features/home/ArtistComp';
import { IoIosArrowForward } from 'react-icons/io';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

const TopSliderBlock = styled.div`
  width: 150px;
  height: 150px;
  margin-left: 24px;
  border-radius: 20px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }
`;

const TopArtistBlock = styled.div`
  width: 100%;
  margin-top: 35px;
`;
const TitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.p`
  margin: 0;
  font-size: 20px;
  font-weight: bold;
`;
const AllArtist = styled.div`
  display: flex;
  align-items: center;
  color: #828282;
  span {
    margin-right: 8px;
    font-size: 16px;
  }
`;

const MainBlock = styled.div`
  width: 100%;
  height: 330px;
  margin-top: 20px;
  border-radius: 20px;
`;

const MainSliderBlock = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }
`;

const EXAMPLE_DATA = [
  {
    src: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    src: 'https://images.unsplash.com/photo-1576504742634-7b20e9a1086d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=820&q=80',
  },
  {
    src: 'https://images.unsplash.com/photo-1533348615060-b925d507b7da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
  },
  {
    src: 'https://images.unsplash.com/photo-1505480449763-8f5c78af9caa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    src: 'https://images.unsplash.com/photo-1466032454009-878beeedbb3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    src: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
];

const ARTIST_DATA = [
  {
    artist_img:
      'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    name: 'Satman',
    art_name: 'Cryptoblots #6',
    score: 100,
  },
  {
    artist_img:
      'https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    name: '4BULLS',
    art_name: 'Dragon',
    score: 98,
  },
  {
    artist_img:
      'https://images.unsplash.com/photo-1520635360276-79f3dbd809f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    name: 'Andreas',
    art_name: 'Untitled',
    score: 95,
  },
];

const MAIN_DATA = [
  {
    src: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=827&q=80',
  },
  {
    src: 'https://images.unsplash.com/photo-1518558997970-4ddc236affcd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=759&q=80',
  },
  {
    src: 'https://images.unsplash.com/photo-1464820453369-31d2c0b651af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
];

const HomePage = () => {
  return (
    <>
      <Navbar back={false}></Navbar>
      <div style={{ marginTop: '10px' }}>
        <Swiper
          slidesPerView={2.3}
          spaceBetween={10}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {EXAMPLE_DATA.map((item, index) => (
            <SwiperSlide key={index}>
              <Link to="/detail">
                <TopSliderBlock>
                  <img src={item.src} alt={index} />
                </TopSliderBlock>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Contents>
        <TopArtistBlock>
          <TitleBlock>
            <Title>Top Artist</Title>
            <AllArtist>
              <span>All</span>
              <IoIosArrowForward size={13} />
            </AllArtist>
          </TitleBlock>
          {ARTIST_DATA.map((data, index) => (
            <ArtistComp
              index={index}
              src={data.artist_img}
              name={data.name}
              artName={data.art_name}
              score={data.score}
            ></ArtistComp>
          ))}
        </TopArtistBlock>

        <MainBlock>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
          >
            {MAIN_DATA.map((item, index) => (
              <SwiperSlide key={index}>
                <MainSliderBlock>
                  <img src={item.src} alt={index} />
                </MainSliderBlock>
              </SwiperSlide>
            ))}
          </Swiper>
        </MainBlock>
      </Contents>
    </>
  );
};

export default HomePage;
