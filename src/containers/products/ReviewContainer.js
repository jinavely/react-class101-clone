import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getReview } from '../../api';
import Loader from '../../components/common/Loader';
import { ReviewListItem } from '../../components/products/ReviewListItem';
import { ReviewStory } from '../../components/products/ReviewStory';
import { ReviewTotal } from '../../components/products/ReviewTotal';

export const ReviewContainer = () => {
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

          <ReviewStory data={data} satisfy={satisfy} />

          <ReviewTotal
            data={data}
            ratingData={ratingData}
            courseEvaluation={courseEvaluation}
          />

          <ReviewInfo>
            {data.realReviews.slice(0, 4).map((item) => (
              <ReviewListItem
                key={item.name}
                item={item}
                ratingData={ratingData}
              />
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
};

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
