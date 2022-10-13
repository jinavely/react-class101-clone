import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LeaderBoardBanner = ({ leaderBoardData }) => {
  return (
    <LeaderBoard>
      <Link to={`${leaderBoardData?.url}`} target={'_blank'}>
        <LeaderInfo>
          <LeaderInfoDT>{leaderBoardData?.title}</LeaderInfoDT>
          <LeaderInfoDD>{leaderBoardData?.description}</LeaderInfoDD>
        </LeaderInfo>
        <LeaderLink>
          <Image
            src={leaderBoardData?.imageURL}
            alt={leaderBoardData?.imageAlt}
          />
        </LeaderLink>
      </Link>
    </LeaderBoard>
  );
};

const LeaderBoard = styled.div`
  width: 100%;
  margin-top: 10px;
  border-bottom: 1px solid rgb(248, 248, 248);
  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
    text-decoration: none;
    padding: 0 0 0 24px;
  }
`;
const Image = styled.img`
  max-width: 100%;
`;
const LeaderInfo = styled.dl``;
const LeaderInfoDT = styled.dt`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.3px;
  margin: 0px;
  font-weight: bold;
  color: inherit;
`;
const LeaderInfoDD = styled(LeaderInfoDT)`
  font-size: 11px;
`;
const LeaderLink = styled.div`
  width: 120px;
`;
