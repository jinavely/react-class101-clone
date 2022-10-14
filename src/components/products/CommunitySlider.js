import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react'; // basic
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Link } from 'react-router-dom';
import { CommunityHeader } from './CommunityHeader';
import { ReactComponent as ReplyIcon } from '../../assets/products/svg_reply.svg';

import 'swiper/swiper.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/pagination/pagination.min.css';

SwiperCore.use([Navigation, Pagination, Autoplay]);

export const CommunitySlider = ({ data, dateFormat }) => {
  return (
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
            <CommunityHeader item={item} dateFormat={dateFormat} />
            <SlideText dangerouslySetInnerHTML={{ __html: item.text }} />

            <SlideBottom>
              <Link to="/">전체보기</Link>
              <DetailViewButton>
                <ReplyIcon />
                {item.replay.length}
              </DetailViewButton>
            </SlideBottom>
          </SwiperSlide>
        ) : null,
      )}
    </ReviewSwiper>
  );
};

const SlideText = styled.p`
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
