import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react'; // basic
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Link } from 'react-router-dom';

import 'swiper/swiper.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/pagination/pagination.min.css';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const TodayProductsWrap = styled.section`
  max-width: 1216px;
  margin: 50px auto;
`;
const TodayProductsH3 = styled.h3`
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  letter-spacing: -0.4px;
  margin: 0px;
  color: rgb(26, 26, 26);
`;
const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;
const TodaySwiper = styled(Swiper)`
  margin-top: 24px;
  padding: 10px 0;
  .swiper-slide {
    overflow: hidden;
    border-radius: 4px;
    img {
      transition: 0.3s;
    }
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
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

export function TodayProducts() {
  return (
    <TodayProductsWrap>
      <TodayProductsH3>오늘본상품</TodayProductsH3>

      <TodaySwiper
        spaceBetween={50}
        slidesPerView={4}
        loop={true}
        navigation
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <Link to="#">
            <Image
              src="https://cdn.class101.net/images/3a514153-f21d-4f18-bc5f-e7e5f11b89f6"
              alt=""
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="#">
            <Image
              src="https://cdn.class101.net/images/6046cd5e-bddd-44bb-a237-aa25ea4936f5"
              alt=""
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="#">
            <Image
              src="https://cdn.class101.net/images/e881c482-c0a8-408e-8a2c-78c69ea3fc59"
              alt=""
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="#">
            <Image
              src="https://cdn.class101.net/images/a6d74825-4cd1-40cc-946b-5df975a2aae8"
              alt=""
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="#">
            <Image
              src="https://cdn.class101.net/images/cb2119ec-b977-49e3-a1a4-b674081ed809"
              alt=""
            />
          </Link>
        </SwiperSlide>
      </TodaySwiper>
    </TodayProductsWrap>
  );
}
