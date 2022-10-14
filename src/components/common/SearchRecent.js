import styled from 'styled-components';

import { ReactComponent as CloseIcon } from '../../assets/products/svg_close.svg';

export const SearchRecent = ({
  handleAllDelete,
  newKeyword,
  handleWords,
  handleDeleteWord,
}) => {
  return (
    <RecentSearch>
      <RecentH4>
        최근 검색어
        <button onClick={handleAllDelete}>전체삭제</button>
      </RecentH4>
      <RecentList>
        {newKeyword &&
          newKeyword.map((item) => (
            <RecentItem key={item.id}>
              <PopularButton onClick={handleWords}>
                {item.keyword}
              </PopularButton>
              <CloseBtn onClick={handleDeleteWord(item)}>
                <CloseIcon />
              </CloseBtn>
            </RecentItem>
          ))}
      </RecentList>
    </RecentSearch>
  );
};

const RecentSearch = styled.div``;
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
const CloseBtn = styled.button``;
