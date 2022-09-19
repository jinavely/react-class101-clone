import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react'; // basic
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/pagination/pagination.min.css';

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
`;
const SlideItem = styled(ReviewSwiper)`
  height: 184px;
  padding: 16px;
  border-radius: 3px;
  box-shadow: rgb(41 42 43 / 10%) 0px 2px 5px, rgb(41 42 43 / 6%) 0px 0px 0.5px;
  margin: 3px 4px 0px;
`;
const SlideTop = styled.div``;
const SlideTxt = styled.p`
  font-size: 14px;
  font-weight: normal;
  color: rgb(26, 26, 26);
  line-height: 20px;
  letter-spacing: -0.15px;
  margin: 0px;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 60px;
`;
const SlideBottom = styled.div``;

export function Community() {
  return (
    <CommunityWrap id="community">
      <CommunityH3>
        커뮤니티 <WriteTotal>82개의 글</WriteTotal>
        <WriteButton>글 작성하기</WriteButton>
      </CommunityH3>

      <ReviewSwiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <SlideItem>
            <SlideTop>
              <div>아바타</div>
              <div>
                <p>주언규PD</p>
                <p>2022. 6. 15.</p>
              </div>
            </SlideTop>
            <SlideTxt>
              안녕하세요. 이전에 저희 직원 뽑았던 것 기억하시나요? 이번에 새로운
              직원 채용하여 저희의 유튜브 육성 교육 프로세스를 더 다듬고, 완전히
              업그레이드된 육성 방식을 장착하였습니다.
            </SlideTxt>
            <SlideBottom>
              <button>전체보기</button>
              <button>상세보기</button>
            </SlideBottom>
          </SlideItem>
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem>lide 2</SlideItem>
        </SwiperSlide>
      </ReviewSwiper>

      <ButtonFolder>더보기</ButtonFolder>
    </CommunityWrap>
  );
}
