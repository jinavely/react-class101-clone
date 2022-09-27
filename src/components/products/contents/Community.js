import styled from 'styled-components';
import Loader from '../../common/Loader';

import { Swiper, SwiperSlide } from 'swiper/react'; // basic
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getCommunity } from '../../../api';
import axios from 'axios';
import { useEffect, useState } from 'react';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const CommunityWrap = styled.section`
  padding: 48px 0px;
`;
const ButtonFolder = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  color: rgb(26, 26, 26);
  background-color: rgb(248, 248, 248);
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.2px;
  margin-top: 24px;
  padding: 0px 16px;
  height: 40px;
  transition: background-color 0.1s ease 0s;
  text-decoration-line: none;
  &:hover,
  &:active {
    background-color: rgb(223, 223, 223);
  }
`;
const CommunityH3 = styled.h3`
  display: flex;
  align-items: flex-end;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  letter-spacing: -0.4px;
  margin: 0px;
  color: rgb(26, 26, 26);
`;
const WriteTotal = styled.span`
  display: inline-block;
  font-size: 14px;
  line-height: 24px;
  color: rgb(202, 202, 202);
  margin-left: 10px;
`;
const WriteButton = styled.button`
  margin-left: auto;
  width: auto;
  display: inline-flex;
  align-items: center;
  border-radius: 3px;
  color: rgb(248, 248, 248);
  background-color: rgb(58, 58, 58);
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.2px;
  padding: 0px 16px;
  height: 40px;
  transition: background-color 0.1s ease 0s;
  text-decoration-line: none;
`;

const ReviewSwiper = styled(Swiper)`
  margin-top: 24px;
  padding: 10px 4px;
  .swiper-slide {
    height: 184px;
    padding: 16px;
    border-radius: 3px;
    box-shadow: rgb(41 42 43 / 10%) 0px 2px 5px,
      rgb(41 42 43 / 6%) 0px 0px 0.5px;
  }
  .swiper-pagination {
    position: static;
    margin-top: 20px;
    .swiper-pagination-bullet {
      width: 6px;
      height: 6px;
      margin: 0px px 8px;
      border-radius: 3px;
      background-color: rgb(102, 102, 102);
      opacity: 0.56;
      transition: 0.3s;
      &.swiper-pagination-bullet-active {
        width: 24px;
        background-color: rgb(102, 102, 102);
        opacity: 1;
      }
    }
  }
  .swiper-button-prev,
  .swiper-button-next {
    box-shadow: rgb(41 42 43 / 10%) 0px 1px 3px, rgb(0 0 0 / 4%) 0px 0px 0.5px;
    width: 32px;
    height: 32px;
    background-image: none;
    margin: 0px;
    position: absolute;
    top: inherit;
    left: inherit;
    right: 0;
    bottom: 0;
    &:after {
      font-size: 18px;
      color: #000;
    }
  }
  .swiper-button-prev {
    right: 40px;
  }
`;

const SlideTop = styled.div`
  display: flex;
  align-items: center;
`;
const SlideTxt = styled.p`
  font-size: 14px;
  font-weight: normal;
  color: rgb(26, 26, 26);
  line-height: 20px;
  letter-spacing: -0.15px;
  margin: 10px auto 0 auto;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 90%;
  height: 60px;
  word-break: keep-all;
`;
const Image = styled.img`
  max-height: 100%;
  object-fit: cover;
`;
const Avatar = styled.span`
  position: relative;
  display: inline-block;
  margin-right: 10px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 100%;
  }
`;
const UserBox = styled.div``;
const Name = styled.p`
  font-size: 11px;
  line-height: 16px;
  letter-spacing: normal;
  margin: 0px;
  font-weight: 600;
  color: rgb(26, 26, 26);
`;
const Date = styled.p`
  font-size: 9px;
  font-weight: normal;
  line-height: 12px;
  letter-spacing: normal;
  margin: 0px;
  color: rgb(202, 202, 202);
`;
const SlideBottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
  a {
    font-size: 14px;
    font-weight: normal;
    line-height: 20px;
    letter-spacing: -0.15px;
    margin: 0px;
    padding: 0px;
    color: rgb(255, 61, 0);
    text-decoration: none;
  }
`;
const DetailViewButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: normal;
  color: rgb(162, 162, 162);
  line-height: 20px;
  letter-spacing: -0.15px;
  margin: 0px;
`;
const ReviewBox = styled.div`
  margin-top: 32px;
  padding-top: 32px;
  &:not(:first-of-type) {
    border-top: 1px solid rgb(239, 239, 239);
  }
`;
const ReviewParam = styled.p`
  font-size: 14px;
  font-weight: normal;
  color: rgb(26, 26, 26);
  line-height: 20px;
  letter-spacing: -0.15px;
  margin: 20px 0 0 0;
  word-break: keep-all;
`;
const Fieldset = styled.fieldset`
  margin: 20px 0 0 0;
  position: relative;
  display: block;
  border-radius: 25px;
  padding: 0px 10px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(229, 229, 229);
  display: flex;
  align-items: center;
`;
const Legend = styled.legend`
  position: absolute;
  left: -9999px;
  font-size: 0;
  opacity: 0;
`;
const AddFile = styled.span`
  display: inline-block;
  width: 28px;
  height: 28px;
`;
const Textarea = styled.textarea`
  font-size: 14px;
  font-weight: normal;
  color: rgb(26, 26, 26);
  letter-spacing: -0.15px;
  width: 100%;
  height: 44px;
  overflow: hidden;
  padding: 12px 10px 8px;
  outline: none;
  border: none;
  background-color: transparent;
  resize: none;
`;
const SendButton = styled.button``;
const Comments = styled.div`
  margin: 20px 0 0 50px;
`;
const CommentInfo = styled.div`
  display: flex;
  align-items: center;
`;
const CommentAvatar = styled.span`
  display: inline-block;
  margin-right: 10px;
  img {
    width: 24px;
    height: 24px;
    border-radius: 100%;
  }
`;
const CommentName = styled.span`
  display: inline-block;
  font-size: 11px;
  font-weight: bold;
  line-height: 16px;
  margin: 0px 4px 0px 0px;
  color: rgb(58, 58, 58);
`;
const CommentDate = styled(CommentName)`
  font-size: 10px;
  color: rgb(202, 202, 202);
`;
const CommentParam = styled.p`
  border-width: 0px;
  color: rgb(0, 0, 0);
  margin: 5px 0 0 0;
  padding: 0;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.125rem;
`;

export function Community() {
  // data
  const { data, isLoading } = useQuery('community', getCommunity);

  // 더보기
  const [newData, setNewData] = useState([]);
  const fetchCommunity = async () => {
    try {
      const response = await (
        await axios.get('http://localhost:4000/community')
      ).data;
      setNewData(response.slice(0, 2));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCommunity();
  }, [setNewData]);

  const handleMoreView = async () => {
    const response = await (
      await axios.get('http://localhost:4000/community')
    ).data;

    setNewData(response.slice(0, newData.length + 1));
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <CommunityWrap>
          <CommunityH3>
            커뮤니티 <WriteTotal>{data.length}개의 글</WriteTotal>
            <WriteButton>글 작성하기</WriteButton>
          </CommunityH3>

          <ReviewSwiper
            spaceBetween={50}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
          >
            {data.map((item) =>
              item.name === '주언규PD' || item.name === '클래스101' ? (
                <SwiperSlide key={item.id}>
                  <SlideTop>
                    <Avatar>
                      <Image src={item.avatar} alt={item.alt} />
                    </Avatar>
                    <UserBox>
                      <Name>{item.name}</Name>
                      <Date>{item.date}</Date>
                    </UserBox>
                  </SlideTop>
                  <SlideTxt dangerouslySetInnerHTML={{ __html: item.text }} />
                  <SlideBottom>
                    <Link to="/">전체보기</Link>
                    <DetailViewButton>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.368 21.632l.594-5.347A9.967 9.967 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.967 9.967 0 01-4.285-.962l-5.347.594zm2.264-2.264l3.452-.384.268.137A7.96 7.96 0 0012 20a8 8 0 100-16 8 8 0 00-8 8 7.96 7.96 0 00.878 3.648l.138.268-.384 3.452zM8 13a1 1 0 110-2 1 1 0 110 2zm4 0a1 1 0 110-2 1 1 0 110 2zm4 0a1 1 0 110-2 1 1 0 110 2z"
                          fill="#a2a2a2"
                        ></path>
                      </svg>
                      {item.replay.length}
                    </DetailViewButton>
                  </SlideBottom>
                </SwiperSlide>
              ) : null,
            )}
          </ReviewSwiper>

          {newData.map((item) => (
            <ReviewBox key={item.id}>
              <SlideTop>
                <Avatar>
                  <Image src={item.avatar} alt={item.alt} />
                </Avatar>
                <UserBox>
                  <Name>{item.name}</Name>
                  <Date>{item.date}</Date>
                </UserBox>
              </SlideTop>
              <ReviewParam dangerouslySetInnerHTML={{ __html: item.text }} />

              {item.replay.map((reItem) => (
                <Comments key={reItem.id}>
                  <CommentInfo>
                    <CommentAvatar>
                      <Image src={reItem.avatar} />
                    </CommentAvatar>
                    <CommentName>{reItem.name}</CommentName>
                    <CommentDate>{reItem.date}</CommentDate>
                  </CommentInfo>
                  <CommentParam
                    dangerouslySetInnerHTML={{ __html: reItem.text }}
                  />
                </Comments>
              ))}
              <Fieldset>
                <Legend>댓글입력</Legend>
                <AddFile>
                  <Image
                    src="https://class101.net/images/ic-new-file-input-button.png"
                    alt=""
                  />
                </AddFile>
                <Textarea placeholder="댓글을 입력해주세요." />
                <SendButton>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 11h4a1 1 0 110 2H6v6l13-7L6 5v6zm.948 9.761C5.616 21.478 4 20.513 4 19V5c0-1.513 1.616-2.478 2.948-1.761l13 7c1.402.755 1.402 2.767 0 3.522l-13 7z"
                      fill="#e5e5e5"
                    ></path>
                  </svg>
                </SendButton>
              </Fieldset>
            </ReviewBox>
          ))}

          {data.length > newData.length ? (
            <ButtonFolder onClick={handleMoreView}>더보기</ButtonFolder>
          ) : null}
        </CommunityWrap>
      )}
    </>
  );
}
