import styled from 'styled-components';
import Loader from '../../components/common/Loader';
import { useQuery } from 'react-query';
import { getCurriculum } from '../../api';
import { Curriculum } from '../../components/products/Curriculum';

export const CurriculumContainer = () => {
  const { data, isLoading } = useQuery('curriculum', getCurriculum);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <CurriculumWrap>
          <CurriculumH3>커리큘럼</CurriculumH3>
          <Description>
            클래스를 신청하신 분들이 배우고 있는 커리큘럼입니다. 콘텐츠는 배우기
            쉽게 영상, 수업노트, 첨부파일로 구성되어있습니다.
          </Description>
          <Curriculum data={data} />
        </CurriculumWrap>
      )}
    </>
  );
};

const CurriculumWrap = styled.section`
  padding: 48px 0px;
`;
const CurriculumH3 = styled.h3`
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  letter-spacing: -0.4px;
  margin: 0px;
  color: rgb(26, 26, 26);
`;
const Description = styled.p`
  margin: 12px 0px 16px;
  font-size: 14px;
  line-height: 24px;
  text-align: left;
  color: rgb(26, 26, 26);
`;
