import styled from 'styled-components';

export const LeaderBoardInfo = ({
  curriculumData,
  leaderBoardData,
  totalFn,
}) => {
  return (
    <ClassInfo>
      <ClassInfoH2>클래스 정보</ClassInfoH2>
      <ClassInfoDL>
        <ClassInfoDT>클래스 분량</ClassInfoDT>
        <ClassInfoDD>
          {curriculumData?.length}개 챕터,&nbsp;
          {totalFn()}개 세부강의
        </ClassInfoDD>
        <ClassInfoDT>수강 가능일</ClassInfoDT>
        <ClassInfoDD>{leaderBoardData?.coursesDate}</ClassInfoDD>
        <ClassInfoDT>자막 포함 여부</ClassInfoDT>
        <ClassInfoDD>{leaderBoardData?.coursesDate}</ClassInfoDD>
      </ClassInfoDL>
    </ClassInfo>
  );
};

const ClassInfo = styled.section`
  padding-top: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgb(248, 248, 248);
`;
const ClassInfoH2 = styled.h2`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.3px;
  margin: 0px 0px 16px;
  font-weight: bold;
  color: rgb(0, 0, 0);
`;
const ClassInfoDL = styled.dl`
  display: flex;
`;
const ClassInfoDT = styled.dt`
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  letter-spacing: -0.15px;
  margin: 0px 12px 0px 0px;
  color: rgb(162, 162, 162);
`;
const ClassInfoDD = styled(ClassInfoDT)`
  margin: 0px 48px 0px 0px;
  color: rgb(26, 26, 26);
`;
