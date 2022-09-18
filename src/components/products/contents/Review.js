import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ReviewWrap = styled.section`
  padding: 48px 0px;
`;
const ReviewH3 = styled.h3`
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  letter-spacing: -0.4px;
  margin: 0px;
  color: rgb(26, 26, 26);
`;
const OneLine = styled.div`
  margin-top: 24px;
  margin-bottom: 16px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  a {
    width: 50%;
    text-align: center;
    text-decoration: none;
  }
`;
const OneLineTitle = styled.p`
  font-size: 11px;
  line-height: 16px;
  letter-spacing: normal;
  margin: 0px;
  color: rgb(162, 162, 162);
  font-weight: 600;
`;
const OneLineRank = styled.p`
  font-size: 32px;
  line-height: 44px;
  letter-spacing: -0.6px;
  margin: 0px;
  font-weight: 800;
  color: rgb(26, 26, 26);
`;
const ReviewList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin: 16px 0px;
  overflow: hidden;
  padding: 0px;
`;
const ReviewListItem = styled.li`
  display: block;
  flex: 1 1 auto;
  pointer-events: auto;
  touch-action: auto;
  border-radius: 3px;
  background-color: rgb(248, 248, 248);

  a {
    position: relative;
    text-decoration: none;
    height: 176px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px 16px;
    text-align: center;
  }
  &:last-child {
    a {
      &:before {
        content: '';
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background-color: rgba(27, 28, 29, 0.8);
        border-radius: 3px;
      }
      &:after {
        font-size: 14px;
        line-height: 20px;
        letter-spacing: -0.15px;
        margin: 0px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        content: '더보기';
        font-weight: bold;
        color: white;
        text-align: center;
      }
    }
  }
`;
const ReviewListTxt = styled.p`
  font-size: 11px;
  font-weight: normal;
  line-height: 16px;
  letter-spacing: normal;
  margin: 6px 0px 8px;
  color: rgb(26, 26, 26);
  word-break: break-all;
  max-height: 48px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;
const ReviewListName = styled.p`
  font-size: 9px;
  font-weight: normal;
  color: rgb(202, 202, 202);
  line-height: 12px;
  letter-spacing: normal;
  margin: 0px;
`;
const RealReview = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 48px 0px;
`;
const ReviewH4 = styled.h4`
  font-size: 20px;
  font-weight: bold;
  line-height: 34px;
  letter-spacing: -0.4px;
  margin: 0px;
  color: rgb(26, 26, 26);
  vertical-align: middle;
`;
const ReviewBtn = styled.button`
  cursor: pointer;
  overflow: hidden;
  z-index: 0;
  background-color: rgb(0, 0, 0, 0);
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 2px;
  padding: 6px 7px;
  position: relative;
  &:hover,
  &:active {
    color: rgb(12, 12, 12);
    background-color: rgb(0, 0, 0, 0.1);
  }
`;
const ReviewPhoto = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  margin-top: 60px;
`;
const PhotoItem = styled.li`
  width: 20%;
`;
const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 144px;
`;
const ReviewTotal = styled.div`
  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;
  }
`;
const Rating = styled.div`
  margin-left: 5%;
  display: flex;
  align-items: center;
`;
const RatingSvg = styled.svg``;
const RatingPath = styled.path`
  fill: darkgray;
  &.active {
    fill: #ffb800;
  }
`;
const Rank = styled.span`
  font-size: 26px;
  line-height: 36px;
  letter-spacing: -0.26px;
  margin: 0px 8px 0px 16px;
  font-weight: 800;
  color: #000;
`;
const TotalNumber = styled.span`
  font-size: 14px;
  font-weight: normal;
  line-height: 18px;
  letter-spacing: -0.14px;
  margin: 12px 0px 0px;
  color: rgb(162, 162, 162);
`;
const Desc = styled.ul`
  width: 50%;
  display: flex;
  flex-direction: column;
`;
const DescItem = styled.li`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  flex: 1 1 0%;
  color: rgb(0, 0, 0);
  margin-top: 10px;
`;
const Empathy = styled.span`
  font-size: 12px;
  line-height: 16px;
  color: rgb(162, 162, 162);
  white-space: nowrap;
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
const ReviewInfo = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 60px;
`;
const ReviewInfoItem = styled.li`
  width: calc(50% - 20px);
`;

export function Review() {
  return (
    <ReviewWrap id="review">
      <ReviewH3>
        실제 수강생들의
        <br />
        생생한 스토리
      </ReviewH3>

      <OneLine>
        <Link
          to="https://class101.net/klasses/627ca2501c4dcb000f2fac4e/reviews"
          target={'_blank'}
        >
          <OneLineTitle>클래스 한줄평</OneLineTitle>
          <OneLineRank>3,593</OneLineRank>
        </Link>
        <Link
          to="https://class101.net/klasses/627ca2501c4dcb000f2fac4e/reviews"
          target={'_blank'}
        >
          <OneLineTitle>수강생 만족도</OneLineTitle>
          <OneLineRank>97%</OneLineRank>
        </Link>
      </OneLine>

      <ReviewList>
        <ReviewListItem>
          <Link to="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M.899 14.526l.001.211C.9 17.75 3.239 20 6 20a5 5 0 100-10c-.244 0-.527.027-.717.1C5.706 8.243 6.518 6.317 8 4H5.5a28.401 28.401 0 00-2.932 4.281C1.613 9.97.9 12 .9 14.314l-.001.212zm12 0l.001.211C12.9 17.75 15.239 20 18 20a5 5 0 100-10c-.244 0-.527.027-.717.1C17.706 8.243 18.518 6.317 20 4h-2.5a28.401 28.401 0 00-2.932 4.281C13.613 9.97 12.9 12 12.9 14.314l-.001.212z"
                fill="#1B1C1D"
              ></path>
            </svg>
            <ReviewListTxt>
              신사임당님 1주일 너무 길었어요. 강의 기다리는 거 살다 처음인 듯.
              너무 도움되고 재미있어요. 감사합니다.
            </ReviewListTxt>
            <ReviewListName>이름 없음님의 글</ReviewListName>
          </Link>
        </ReviewListItem>
        <ReviewListItem>
          <Link to="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M.899 14.526l.001.211C.9 17.75 3.239 20 6 20a5 5 0 100-10c-.244 0-.527.027-.717.1C5.706 8.243 6.518 6.317 8 4H5.5a28.401 28.401 0 00-2.932 4.281C1.613 9.97.9 12 .9 14.314l-.001.212zm12 0l.001.211C12.9 17.75 15.239 20 18 20a5 5 0 100-10c-.244 0-.527.027-.717.1C17.706 8.243 18.518 6.317 20 4h-2.5a28.401 28.401 0 00-2.932 4.281C13.613 9.97 12.9 12 12.9 14.314l-.001.212z"
                fill="#1B1C1D"
              ></path>
            </svg>
            <ReviewListTxt>
              아 이번 차시 왜이렇게 웃겨욧 ㅋㅋㅋㅋㅋㅋㅋㅋ
            </ReviewListTxt>
            <ReviewListName>이름 없음님의 글</ReviewListName>
          </Link>
        </ReviewListItem>
        <ReviewListItem>
          <Link to="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M.899 14.526l.001.211C.9 17.75 3.239 20 6 20a5 5 0 100-10c-.244 0-.527.027-.717.1C5.706 8.243 6.518 6.317 8 4H5.5a28.401 28.401 0 00-2.932 4.281C1.613 9.97.9 12 .9 14.314l-.001.212zm12 0l.001.211C12.9 17.75 15.239 20 18 20a5 5 0 100-10c-.244 0-.527.027-.717.1C17.706 8.243 18.518 6.317 20 4h-2.5a28.401 28.401 0 00-2.932 4.281C13.613 9.97 12.9 12 12.9 14.314l-.001.212z"
                fill="#1B1C1D"
              ></path>
            </svg>
            <ReviewListTxt>
              하고싶은거 해도 되고 좋아하는거 해도 되고 다 되는데, 제발 제목과
              썸네일부터 땅! 박아놓고, 거기에 맞춰 소재와 사람과 할거리를
              찾아라! 열변을토하시는 신사임당님ㅎㅎ 네네, 꼭 그렇게 할게요ㅎㅎ
              고맙습니다^^
            </ReviewListTxt>
            <ReviewListName>이름 없음님의 글</ReviewListName>
          </Link>
        </ReviewListItem>
        <ReviewListItem>
          <Link to="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M.899 14.526l.001.211C.9 17.75 3.239 20 6 20a5 5 0 100-10c-.244 0-.527.027-.717.1C5.706 8.243 6.518 6.317 8 4H5.5a28.401 28.401 0 00-2.932 4.281C1.613 9.97.9 12 .9 14.314l-.001.212zm12 0l.001.211C12.9 17.75 15.239 20 18 20a5 5 0 100-10c-.244 0-.527.027-.717.1C17.706 8.243 18.518 6.317 20 4h-2.5a28.401 28.401 0 00-2.932 4.281C13.613 9.97 12.9 12 12.9 14.314l-.001.212z"
                fill="#1B1C1D"
              ></path>
            </svg>
            <ReviewListTxt>
              사임당님 강의 감사합니다! 장비가 중요한가 궁금했지만 조명과
              본질적인 요소 파악에 더 중점을 맞추겠습니다.
            </ReviewListTxt>
            <ReviewListName>미술관옆 해바라기님의 글</ReviewListName>
          </Link>
        </ReviewListItem>
      </ReviewList>

      <RealReview>
        <ReviewH4>실제 수강생 후기</ReviewH4>
        <ReviewBtn>후기 작성하기</ReviewBtn>
      </RealReview>

      <ReviewTotal>
        <Link to="#">
          <Rating>
            <RatingSvg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <RatingPath
                className="active"
                d="M7.673 19.972c-1.03.542-1.706.051-1.51-1.096l.827-4.819-3.501-3.413c-.834-.813-.575-1.607.577-1.774l4.837-.703 2.165-4.384c.515-1.044 1.35-1.044 1.865 0l2.164 4.384 4.838.703c1.152.167 1.41.961.577 1.774l-3.501 3.413.826 4.819c.196 1.147-.478 1.638-1.509 1.096L12 17.697l-4.327 2.275z"
              ></RatingPath>
            </RatingSvg>
            <RatingSvg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <RatingPath
                className="active"
                d="M7.673 19.972c-1.03.542-1.706.051-1.51-1.096l.827-4.819-3.501-3.413c-.834-.813-.575-1.607.577-1.774l4.837-.703 2.165-4.384c.515-1.044 1.35-1.044 1.865 0l2.164 4.384 4.838.703c1.152.167 1.41.961.577 1.774l-3.501 3.413.826 4.819c.196 1.147-.478 1.638-1.509 1.096L12 17.697l-4.327 2.275z"
              ></RatingPath>
            </RatingSvg>
            <RatingSvg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <RatingPath
                className="active"
                d="M7.673 19.972c-1.03.542-1.706.051-1.51-1.096l.827-4.819-3.501-3.413c-.834-.813-.575-1.607.577-1.774l4.837-.703 2.165-4.384c.515-1.044 1.35-1.044 1.865 0l2.164 4.384 4.838.703c1.152.167 1.41.961.577 1.774l-3.501 3.413.826 4.819c.196 1.147-.478 1.638-1.509 1.096L12 17.697l-4.327 2.275z"
              ></RatingPath>
            </RatingSvg>
            <RatingSvg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <RatingPath
                className="active"
                d="M7.673 19.972c-1.03.542-1.706.051-1.51-1.096l.827-4.819-3.501-3.413c-.834-.813-.575-1.607.577-1.774l4.837-.703 2.165-4.384c.515-1.044 1.35-1.044 1.865 0l2.164 4.384 4.838.703c1.152.167 1.41.961.577 1.774l-3.501 3.413.826 4.819c.196 1.147-.478 1.638-1.509 1.096L12 17.697l-4.327 2.275z"
              ></RatingPath>
            </RatingSvg>
            <RatingSvg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <RatingPath d="M7.673 19.972c-1.03.542-1.706.051-1.51-1.096l.827-4.819-3.501-3.413c-.834-.813-.575-1.607.577-1.774l4.837-.703 2.165-4.384c.515-1.044 1.35-1.044 1.865 0l2.164 4.384 4.838.703c1.152.167 1.41.961.577 1.774l-3.501 3.413.826 4.819c.196 1.147-.478 1.638-1.509 1.096L12 17.697l-4.327 2.275z"></RatingPath>
            </RatingSvg>

            <Rank>3.9</Rank>
            <TotalNumber>총 7개</TotalNumber>
          </Rating>
          <Desc>
            <DescItem>
              친절하고 자세하게 설명해주세요.
              <Empathy>5명 공감</Empathy>
            </DescItem>
            <DescItem>
              커리큘럼이 잘 짜여져있어요.
              <Empathy>5명 공감</Empathy>
            </DescItem>
            <DescItem>
              재미있고 몰입되는 시간이었어요.
              <Empathy>5명 공감</Empathy>
            </DescItem>
          </Desc>
        </Link>
      </ReviewTotal>

      <ReviewPhoto>
        <PhotoItem>
          <Image
            src="https://cdn.class101.net/images/e050269e-7213-4c69-818e-a41053dcba74"
            alt=""
          />
        </PhotoItem>
        <PhotoItem>
          <Image
            src="https://cdn.class101.net/images/f8f64c96-abdc-4bed-8722-944331405f96"
            alt=""
          />
        </PhotoItem>
        <PhotoItem>
          <Image
            src="https://cdn.class101.net/images/23899222-fce8-4160-addc-b320db24e171"
            alt=""
          />
        </PhotoItem>
        <PhotoItem>
          <Image
            src="https://cdn.class101.net/images/103b3546-3b71-42dd-8f19-054ff43986ed"
            alt=""
          />
        </PhotoItem>
        <PhotoItem>
          <Image
            src="https://cdn.class101.net/images/5ec4f59a-a27b-4088-9cef-76104f50479b"
            alt=""
          />
        </PhotoItem>
      </ReviewPhoto>

      <ReviewInfo>
        <ReviewInfoItem>111</ReviewInfoItem>
        <ReviewInfoItem>222</ReviewInfoItem>
      </ReviewInfo>

      <ButtonFolder>7개의 후기 더보기</ButtonFolder>
    </ReviewWrap>
  );
}
