import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { getSearch } from '../../api';
import Loader from '../common/Loader';

const SearchWrap = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 38px;
  z-index: 1;
  width: 100%;
  padding: 16px;
  background: #fff;
  border: 1px solid #d9d9d9;
`;
const SearchInner = styled(motion.div)``;
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
  padding: 12px 0;
  display: flex;
  justify-content: space-between;
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
  width: 50%;
  border-width: 0px;
  justify-content: flex-start;

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

const SearchLayer = (props) => {
  // data
  const { data, isLoading } = useQuery('popular', getSearch);

  // toggled
  const [searchToggleId, setSearchToggleId] = useState(false);
  useEffect(() => {
    if (setSearchToggleId) setSearchToggleId(props.searchToggleId);
  }, [setSearchToggleId, props.searchToggleId]);
  console.log(searchToggleId);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <AnimatePresence>
          {searchToggleId && (
            <SearchWrap
              layoutId={searchToggleId}
              initial={{ opacity: 0, y: -38 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <SearchInner>
                <RecentSearch>
                  <RecentH4>
                    최근 검색어 <button>전체삭제</button>
                  </RecentH4>
                  <RecentList>
                    <RecentItem>
                      아이패드
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="m13.75 12 7.2-7.15c.1-.1.1-.25 0-.35L19.5 3.05c-.1-.1-.25-.1-.35 0L12 10.25l-7.15-7.2c-.1-.1-.25-.1-.35 0L3.05 4.5c-.1.1-.1.25 0 .35l7.2 7.15-7.2 7.15c-.1.1-.1.25 0 .35l1.45 1.45c.1.1.25.1.35 0l7.15-7.2 7.15 7.15c.1.1.25.1.35 0l1.4-1.4c.1-.1.1-.25 0-.35L13.75 12Z"></path>
                        </svg>
                      </button>
                    </RecentItem>
                    <RecentItem>
                      es6
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="m13.75 12 7.2-7.15c.1-.1.1-.25 0-.35L19.5 3.05c-.1-.1-.25-.1-.35 0L12 10.25l-7.15-7.2c-.1-.1-.25-.1-.35 0L3.05 4.5c-.1.1-.1.25 0 .35l7.2 7.15-7.2 7.15c-.1.1-.1.25 0 .35l1.45 1.45c.1.1.25.1.35 0l7.15-7.2 7.15 7.15c.1.1.25.1.35 0l1.4-1.4c.1-.1.1-.25 0-.35L13.75 12Z"></path>
                        </svg>
                      </button>
                    </RecentItem>
                  </RecentList>
                </RecentSearch>
                <PopularSearch>
                  <PopularH4>인기 검색어</PopularH4>
                  <PopularList as="ol">
                    {data.popular.map((item) => (
                      <PopularItem key={item.id}>
                        <em>{item.id}</em>
                        {item.name}
                      </PopularItem>
                    ))}
                  </PopularList>
                </PopularSearch>
              </SearchInner>
            </SearchWrap>
          )}
        </AnimatePresence>
      )}
    </>
  );
};

export default SearchLayer;
