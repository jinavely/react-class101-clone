import { useQuery } from 'react-query';
import { getCurriculum, getLeaderBoard } from '../../api';
import { LeaderBoardBanner } from '../../components/products/LeaderBoardBanner';
import { LeaderBoardInfo } from '../../components/products/LeaderBoardInfo';

export const LeaderBoardContainer = () => {
  // leaderBoard data
  const { data: leaderBoardData } = useQuery('leaderBoard', getLeaderBoard);
  // curriculum data
  const { data: curriculumData } = useQuery('curriculum', getCurriculum);

  // 커리큘럼 세부강의 갯수
  const totalFn = () => {
    const total = [];
    curriculumData?.map((items) =>
      items?.menuLink.map((item, i) => total.push(i)),
    );
    return total.length;
  };

  return (
    <>
      <LeaderBoardBanner leaderBoardData={leaderBoardData} />
      <LeaderBoardInfo
        curriculumData={curriculumData}
        leaderBoardData={leaderBoardData}
        totalFn={totalFn}
      />
    </>
  );
};
