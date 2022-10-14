import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as QuotationMarkIcon } from '../../assets/products/ico_quotation_mark.svg';

export const ReviewStory = ({ data, satisfy }) => {
  return (
    <>
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
              <QuotationMarkIcon />
              <ReviewListTxt>{item.text}</ReviewListTxt>
              <ReviewListName>
                {item.name ? item.name : '이름 없음'}님의 글
              </ReviewListName>
            </Link>
          </ReviewListItem>
        ))}
      </ReviewList>
    </>
  );
};

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
