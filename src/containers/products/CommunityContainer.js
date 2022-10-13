import styled from 'styled-components';
import Loader from '../../components/common/Loader';
import { useQuery } from 'react-query';
import { getCommunity } from '../../api';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { dateFormat } from '../../utils/filter';
import { CommunitySlider } from '../../components/products/CommunitySlider';
import { CommunityReview } from '../../components/products/CommunityReview';

export const CommunityContainer = () => {
  // data
  const { data, isLoading } = useQuery('community', getCommunity);

  // 더보기
  const [newData, setNewData] = useState([]);
  const fetchCommunity = async () => {
    try {
      const response = await (
        await axios.get('http://localhost:4000/community')
      ).data;
      setNewData(response.slice(0, 2));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCommunity();
  }, [setNewData]);

  const handleMoreView = async () => {
    const response = await (
      await axios.get('http://localhost:4000/community')
    ).data;

    setNewData(response.slice(0, newData.length + 1));
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <CommunityWrap>
          <CommunityH3>
            커뮤니티 <WriteTotal>{data.length}개의 글</WriteTotal>
            <WriteButton>글 작성하기</WriteButton>
          </CommunityH3>

          <CommunitySlider data={data} dateFormat={dateFormat} />

          {newData.map((item) => (
            <CommunityReview
              key={item.id}
              item={item}
              dateFormat={dateFormat}
            />
          ))}

          {data.length > newData.length ? (
            <ButtonFolder onClick={handleMoreView}>더보기</ButtonFolder>
          ) : null}
        </CommunityWrap>
      )}
    </>
  );
};

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
