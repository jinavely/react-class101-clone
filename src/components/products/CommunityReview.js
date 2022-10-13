import styled from 'styled-components';
import { CommunityForm } from './CommunityForm';
import { CommunityHeader } from './CommunityHeader';

export function CommunityReview({ item, dateFormat }) {
  return (
    <ReviewBox>
      <CommunityHeader item={item} dateFormat={dateFormat} />
      <SlideText dangerouslySetInnerHTML={{ __html: item.text }} />

      {item.replay.map((reItem) => (
        <Comments key={reItem.id}>
          <CommentInfo>
            <CommentAvatar>
              <Image src={reItem.avatar} />
            </CommentAvatar>
            <CommentName>{reItem.name}</CommentName>
            <CommentDate>{dateFormat(reItem.date)}</CommentDate>
          </CommentInfo>
          <CommentParam dangerouslySetInnerHTML={{ __html: reItem.text }} />
        </Comments>
      ))}

      <CommunityForm />
    </ReviewBox>
  );
}

const SlideText = styled.p`
  border-width: 0px;
  color: rgb(0, 0, 0);
  margin: 5px 0 0 0;
  padding: 0;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.125rem;
`;
const Image = styled.img`
  max-height: 100%;
  object-fit: cover;
`;
const ReviewBox = styled.div`
  margin-top: 32px;
  padding-top: 32px;
  &:not(:first-of-type) {
    border-top: 1px solid rgb(239, 239, 239);
  }
`;
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
