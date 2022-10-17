import styled from 'styled-components';
import Loader from '../../components/common/Loader';
import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getSearch } from '../../api';
import { useEffect } from 'react';

import { SearchListItem } from '../../components/common/SearchListItem';

export const SearchContainer = () => {
  // search시
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get('keyword');
  const { data, isLoading, refetch } = useQuery('search', () =>
    getSearch({ keyword }),
  );
  // search refetch
  useEffect(() => {
    try {
      if (keyword === '') return;
      refetch();
    } catch (error) {
      console.log(error);
    }
  }, [refetch, keyword]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <SearchWrap>
          <SearchList>
            {data?.results.length > 0 ? (
              data?.results.map((item) => (
                <SearchListItem key={item.id} item={item} />
              ))
            ) : (
              <NoResult className="no-data">검색하신 정보가 없습니다.</NoResult>
            )}
          </SearchList>
        </SearchWrap>
      )}
    </>
  );
};

const SearchWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 1216px;
  margin: 0 auto;
`;
const SearchList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: -10px;
  width: calc(100% + 10px);
`;
const NoResult = styled.li`
  display: flex;
  width: 100%;
  height: calc(100vh - 228px);
  align-items: center;
  justify-content: center;
`;
