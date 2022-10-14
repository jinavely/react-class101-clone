import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as ReplyIcon } from '../../assets/products/svg_reply.svg';
import { ReactComponent as GoodIcon } from '../../assets/products/ico_good.svg';
import { ReactComponent as StarIcon } from '../../assets/products/ico_star.svg';

export const ReviewListItem = ({ item, ratingData }) => {
  return (
    <>
      <ReviewInfoItem>
        <Link to={item.link}>
          <ReviewAvatar>
            <Avatar>
              <AvatarImage src={item.avatar} alt={item.name} />
            </Avatar>
            <EvaluationBox>
              <AvatarId>{item.name}</AvatarId>
              <Evaluation>
                <AvatarRating>
                  {ratingData.map((r, index) =>
                    r <= item.rating ? (
                      <StarIcon key={index} className="active" />
                    ) : (
                      <StarIcon key={index} />
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
            <ReplyIcon /> {item.reply ? item.reply : '댓글 달기'}
          </ReplyButton>
          <HelperButton>
            <GoodIcon /> {item.good}명에게 도움됨
          </HelperButton>
          <ReportButton>신고하기</ReportButton>
        </ReplyBox>
      </ReviewInfoItem>
    </>
  );
};

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
