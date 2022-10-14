import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as BigStarIcon } from '../../assets/products/ico_big_star.svg';

export const ReviewTotal = ({ data, ratingData, courseEvaluation }) => {
  return (
    <>
      <RealReview>
        <ReviewH4>실제 수강생 후기</ReviewH4>
        <ReviewBtn>후기 작성하기</ReviewBtn>
      </RealReview>

      <ReviewTotalWrap>
        <Link
          to="https://class101.net/reviews/list?klassId=61137c012ae747000d32b1fb"
          target="_blank"
        >
          <Rating>
            {ratingData.map((item, index) =>
              item <= Math.round(courseEvaluation()) ? (
                <BigStarIcon key={index} className="active" />
              ) : (
                <BigStarIcon key={index} />
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
      </ReviewTotalWrap>

      <ReviewPhoto>
        {data.reviewPhotos.slice(0, 5).map((item) => (
          <PhotoItem key={item.id}>
            <Image src={item.imageUrl} alt={item.imageAlt} />
          </PhotoItem>
        ))}
      </ReviewPhoto>
    </>
  );
};

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
const ReviewTotalWrap = styled.div`
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
  svg {
    path {
      fill: #a7a5a5;
    }
    &.active {
      path {
        fill: #ffb800;
      }
    }
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
