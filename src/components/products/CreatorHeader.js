import styled from 'styled-components';

export const CreatorHeader = ({ data }) => {
  return (
    <>
      <CreatorAvatar>
        <CreatorH3 dangerouslySetInnerHTML={{ __html: data.title }} />
        <Avatar src={data.avatar} alt={data.summary} />
      </CreatorAvatar>
      <Exposure>
        <ExposureImage src={data.snsImageUrl} alt={data.snsSummary} />
        {data.nickname}
      </Exposure>
      <LastActivity>
        마지막 활동 <strong>{data.answer}시간 전 미션 답변 작성</strong>
      </LastActivity>
    </>
  );
};

const CreatorH3 = styled.h3`
  font-size: 24px;
  font-weight: normal;
  line-height: 34px;
  letter-spacing: -0.4px;
  margin: 0px;
  color: rgb(26, 26, 26);
  strong {
    font-weight: bold;
  }
`;
const CreatorAvatar = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Exposure = styled.p`
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 10px;
  color: rgb(162, 162, 162);
`;
const ExposureImage = styled.img`
  width: 18px;
  height: 18px;
`;
const Avatar = styled.img`
  object-fit: cover;
  width: 64px;
  height: 64px;
  border: 1px solid rgb(248, 248, 248);
  border-radius: 100%;
`;
const LastActivity = styled.p`
  font-size: 11px;
  font-weight: normal;
  color: rgb(26, 26, 26);
  line-height: 16px;
  letter-spacing: normal;
  margin: 10px 0 0 0;
`;
