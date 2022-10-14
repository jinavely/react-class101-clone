import styled from 'styled-components';

export const SearchPopular = ({ data, handleWords }) => {
  return (
    <PopularSearch>
      <PopularH4>인기 검색어</PopularH4>
      <PopularList as="ol">
        {data.results.slice(0, 10).map((item, i) => (
          <PopularItem key={item.id}>
            <PopularButton onClick={handleWords}>
              <em>{i + 1}</em>
              <span>{item.title}</span>
            </PopularButton>
          </PopularItem>
        ))}
      </PopularList>
    </PopularSearch>
  );
};

const RecentH4 = styled.h4`
  border-width: 0px;
  color: var(--system-on-color);
  margin: 0px;
  padding: 0px;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.25rem;
  display: flex;
  justify-content: space-between;

  button {
    color: rgb(102, 102, 102);
    font-size: 0.75rem;
    line-height: 1.125rem;
  }
`;
const RecentList = styled.ul`
  margin-top: 10px;
`;
const RecentItem = styled.li`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.125rem;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  cursor: pointer;
  margin: 0;
  padding: 6px 0;
  display: flex;
  justify-content: space-between;
  a {
    text-decoration: none;
    color: #000;
  }
  svg {
    display: block;
    width: 12px;
    height: 12px;
    fill: rgb(102, 102, 102);
    path {
      fill: rgb(102, 102, 102);
    }
  }
`;
const PopularSearch = styled.div`
  margin-top: 30px;
`;
const PopularH4 = styled(RecentH4)``;
const PopularList = styled(RecentList)`
  display: flex;
  flex-wrap: wrap;
`;
const PopularItem = styled(RecentItem)`
  position: relative;
  width: 50%;

  em {
    border-width: 0px;
    color: rgb(255, 86, 0);
    margin: 0 8px 0 0;
    padding: 0;
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.125rem;
  }
`;
const PopularButton = styled.button`
  text-decoration: none;
  width: 100%;
  border-width: 0px;
  display: inline-block;
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #000;
`;
