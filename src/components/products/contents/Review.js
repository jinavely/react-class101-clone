import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getReview } from '../../../api';
import Loader from '../../common/Loader';

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
  em {
    font-size: 0.7em;
  }
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
  fill: #a7a5a5;
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
const ButtonFolder = styled(Link)`
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
  gap: 30px;
  margin-top: 30px;
`;
const ReviewInfoItem = styled.li`
  width: calc(50% - 20px);
  margin-top: 30px;
  a {
    text-decoration: none;
    color: #000;
  }
`;
const ReviewAvatar = styled.div`
  display: flex;
  align-items: center;
`;
const Avatar = styled.div`
  width: 32px;
  height: 32px;
`;
const AvatarImage = styled.img`
  object-fit: cover;
  width: 100%;
  border-radius: 100%;
`;
const EvaluationBox = styled.div`
  width: 100%;
  margin-left: 10px;
`;
const AvatarId = styled.p`
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: inherit;
`;
const AvatarRating = styled.div`
  svg path {
    fill: #a7a5a5;
    &.active {
      fill: #ffb800;
    }
  }
`;
const Evaluation = styled.div`
  display: flex;
  margin-top: 5px;
`;
const Date = styled.span`
  font-weight: normal;
  font-size: 11px;
  line-height: 14px;
  color: rgb(162, 162, 162);
  margin-left: 8px;
`;
const Percent = styled(Date)``;
const ReviewParam = styled.p`
  font-size: 13px;
  line-height: 1.5;
  margin-top: 10px;
  margin-bottom: 0px;
  flex: 1 1 0%;
  width: 100%;
  min-height: 98px;
  white-space: break-spaces;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const ReplyBox = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
`;
const ReplyButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 16px;
  color: rgb(162, 162, 162);
  margin-right: 16px;
  svg {
    margin-right: 4px;
  }
`;
const HelperButton = styled(ReplyButton)``;
const ReportButton = styled(ReplyButton)`
  font-weight: bold;
  margin-left: auto;
  margin-right: 0;
`;

export function Review() {
  // data
  const { data, isLoading } = useQuery('reviews', getReview);

  // 별갯수
  const [ratingData, setRatingData] = useState([]);
  useEffect(() => {
    setRatingData([1, 2, 3, 4, 5]);
  }, [setRatingData]);

  // 수강생 만족도 계산
  const satisfy = () => {
    const sum = data.oneLineReviews.reduce(
      (cnt, item) => cnt + Number(item.rating) / data.oneLineReviews.length,
      0,
    );
    return sum.toFixed(2) * 2 * 10; // 5점 만점 * 퍼센트 10
  };
  // 실제 후강 후기 별점
  const courseEvaluation = () => {
    const sum = data.realReviews.reduce(
      (cnt, item) => cnt + Number(item.rating) / data.realReviews.length,
      0,
    );
    return sum.toFixed(2); // 5점 만점
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ReviewWrap>
          <ReviewH3 dangerouslySetInnerHTML={{ __html: data.title }}></ReviewH3>

          <OneLine>
            <Link
              to="https://class101.net/klasses/627ca2501c4dcb000f2fac4e/reviews"
              target={'_blank'}
            >
              <OneLineTitle>클래스 한줄평</OneLineTitle>
              <OneLineRank>{data.oneLineReviews.length}</OneLineRank>
            </Link>
            <Link
              to="https://class101.net/klasses/627ca2501c4dcb000f2fac4e/reviews"
              target={'_blank'}
            >
              <OneLineTitle>수강생 만족도</OneLineTitle>
              <OneLineRank>
                {satisfy()}
                <em>%</em>
              </OneLineRank>
            </Link>
          </OneLine>

          <ReviewList>
            {data.oneLineReviews.slice(0, 4).map((item) => (
              <ReviewListItem key={item.text}>
                <Link to={`${item.link}/:id`} target="_blank">
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
                  <ReviewListTxt>{item.text}</ReviewListTxt>
                  <ReviewListName>
                    {item.name ? item.name : '이름 없음'}님의 글
                  </ReviewListName>
                </Link>
              </ReviewListItem>
            ))}
          </ReviewList>

          <RealReview>
            <ReviewH4>실제 수강생 후기</ReviewH4>
            <ReviewBtn>후기 작성하기</ReviewBtn>
          </RealReview>

          <ReviewTotal>
            <Link
              to="https://class101.net/reviews/list?klassId=61137c012ae747000d32b1fb"
              target="_blank"
            >
              <Rating>
                {ratingData.map((item) =>
                  item <= Math.round(courseEvaluation()) ? (
                    <RatingSvg
                      key={item}
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
                  ) : (
                    <RatingSvg
                      key={item}
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                    >
                      <RatingPath d="M7.673 19.972c-1.03.542-1.706.051-1.51-1.096l.827-4.819-3.501-3.413c-.834-.813-.575-1.607.577-1.774l4.837-.703 2.165-4.384c.515-1.044 1.35-1.044 1.865 0l2.164 4.384 4.838.703c1.152.167 1.41.961.577 1.774l-3.501 3.413.826 4.819c.196 1.147-.478 1.638-1.509 1.096L12 17.697l-4.327 2.275z"></RatingPath>
                    </RatingSvg>
                  ),
                )}

                <Rank>{courseEvaluation()}</Rank>
                <TotalNumber>총 {data.realReviews.length}개</TotalNumber>
              </Rating>
              <Desc>
                <DescItem>
                  친절하고 자세하게 설명해주세요.
                  <Empathy>{data.empathy1}명 공감</Empathy>
                </DescItem>
                <DescItem>
                  커리큘럼이 잘 짜여져있어요.
                  <Empathy>{data.empathy2}명 공감</Empathy>
                </DescItem>
                <DescItem>
                  재미있고 몰입되는 시간이었어요.
                  <Empathy>{data.empathy3}명 공감</Empathy>
                </DescItem>
              </Desc>
            </Link>
          </ReviewTotal>

          <ReviewPhoto>
            {data.reviewPhotos.slice(0, 5).map((item) => (
              <PhotoItem key={item.id}>
                <Image src={item.imageUrl} alt={item.imageAlt} />
              </PhotoItem>
            ))}
          </ReviewPhoto>

          <ReviewInfo>
            {data.realReviews.slice(0, 4).map((item) => (
              <ReviewInfoItem key={item.name}>
                <Link to={item.link}>
                  <ReviewAvatar>
                    <Avatar>
                      <AvatarImage src={item.avatar} alt={item.name} />
                    </Avatar>
                    <EvaluationBox>
                      <AvatarId>{item.name}</AvatarId>
                      <Evaluation>
                        <AvatarRating>
                          {ratingData.map((r) =>
                            r <= item.rating ? (
                              <svg
                                key={r}
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  className="active"
                                  fillRule="evenodd"
                                  d="M7.673 19.972c-1.03.542-1.706.051-1.51-1.096l.827-4.819-3.501-3.413c-.834-.813-.575-1.607.577-1.774l4.837-.703 2.165-4.384c.515-1.044 1.35-1.044 1.865 0l2.164 4.384 4.838.703c1.152.167 1.41.961.577 1.774l-3.501 3.413.826 4.819c.196 1.147-.478 1.638-1.509 1.096L12 17.697l-4.327 2.275z"
                                ></path>
                              </svg>
                            ) : (
                              <svg
                                key={r}
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M7.673 19.972c-1.03.542-1.706.051-1.51-1.096l.827-4.819-3.501-3.413c-.834-.813-.575-1.607.577-1.774l4.837-.703 2.165-4.384c.515-1.044 1.35-1.044 1.865 0l2.164 4.384 4.838.703c1.152.167 1.41.961.577 1.774l-3.501 3.413.826 4.819c.196 1.147-.478 1.638-1.509 1.096L12 17.697l-4.327 2.275z"
                                ></path>
                              </svg>
                            ),
                          )}
                        </AvatarRating>
                        <Date>
                          {item.month}월 {item.day}일
                        </Date>
                        <Percent>{item.progress}% 수강 후 작성</Percent>
                      </Evaluation>
                    </EvaluationBox>
                  </ReviewAvatar>
                  <ReviewParam>{item.text}</ReviewParam>
                </Link>
                <ReplyBox>
                  <ReplyButton>
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
                    {item.reply ? item.reply : '댓글 달기'}
                  </ReplyButton>
                  <HelperButton>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#a2a2a2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M13.139 10l.844-5.066a2 2 0 00-1.279-2.205l-.419-.155-2.604 7.205V20h8.8l1.467-8.836A1 1 0 0018.961 10h-5.822zm-5.458-.571L11.089 0l2.308.853a4 4 0 012.559 4.41L15.5 8h3.461a3 3 0 012.96 3.491l-1.573 9.477C20.25 21.566 19.779 22 19.23 22H7.681V9.429z"
                      ></path>
                      <path d="M3.135 9.429C2.503 9.429 2 9.989 2 10.68v10.069C2 21.427 2.508 22 3.135 22h2.273V9.429H3.135z"></path>
                    </svg>
                    {item.good}명에게 도움됨
                  </HelperButton>
                  <ReportButton>신고하기</ReportButton>
                </ReplyBox>
              </ReviewInfoItem>
            ))}
          </ReviewInfo>

          <ButtonFolder
            to="https://class101.net/reviews/list?klassId=5ddaa3537c586d0d8f66f201"
            target="_blank"
          >
            {data.realReviews.slice(4).length}개의 후기 더보기
          </ButtonFolder>
        </ReviewWrap>
      )}
    </>
  );
}
