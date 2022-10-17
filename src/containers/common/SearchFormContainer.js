import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { getPopSearch } from '../../api';
import Loader from '../../components/common/Loader';
import { SearchPopular } from '../../components/common/SearchPopular';
import { SearchRecent } from '../../components/common/SearchRecent';

import { ReactComponent as SearchIcon } from '../../assets/products/ico_search.svg';

const SearchFormContainer = () => {
  // data
  const { data, isLoading } = useQuery('popularSearch', getPopSearch);
  const [resultKeyword, setResultKeyword] = useState([]);

  // Search Toggled
  const [searchToggleId, setSearchToggleId] = useState(false);
  const inputRef = useRef();
  const history = useHistory();
  const searchShow = () => setSearchToggleId((prev) => (prev = true));
  const searchHide = () => {
    setSearchToggleId((prev) => (prev = false));
    inputRef.current.blur();
  };

  // Search
  const [keyword, setKeyword] = useState('');
  const onChangeValue = (e) => setKeyword((prev) => (prev = e.target.value));
  const handleSubmit = (e) => {
    e.preventDefault();

    if (keyword === '' || inputRef.current.value === '') {
      alert('검색어를 입력해 주세요');
      return;
    }
    history.push(`/search?keyword=${keyword}`);
    handleAddKeywordSubmit(keyword);
    searchHide();
  };

  // Add Search
  useEffect(() => {
    if (localStorage.getItem('searchKeyword')) {
      setResultKeyword(JSON.parse(localStorage.getItem('searchKeyword')));
    }
  }, [setResultKeyword]);
  const handleAddKeywordSubmit = (keyword) => {
    const searchKeyword = {
      id: Date.now(),
      keyword,
    };
    localStorage.setItem(
      'searchKeyword',
      JSON.stringify([searchKeyword, ...resultKeyword.slice(0, 4)]),
    );
    setResultKeyword([searchKeyword, ...resultKeyword.slice(0, 4)]);
  };

  // search
  const handleWords = (e) => {
    history.push(`/search?keyword=${e.target.innerText}`);
    handleAddKeyword(e.target.innerText);
    inputRef.current.value = e.target.innerText;
    searchHide();
    e.preventDefault();
  };

  // 최근 검색어
  const newKeyword = JSON.parse(localStorage.getItem('searchKeyword'));
  const handleAddKeyword = (keyword) => {
    let searchKeyword = {
      id: Date.now(),
      keyword,
    };

    localStorage.setItem(
      'searchKeyword',
      JSON.stringify([searchKeyword, ...resultKeyword.slice(0, 4)]),
    );
    setResultKeyword([searchKeyword, ...resultKeyword.slice(0, 4)]);
  };
  // 최근 검색어 삭제
  const handleAllDelete = () => {
    localStorage.removeItem('searchKeyword');
    setResultKeyword([]);
    searchHide();
  };
  const handleDeleteWord = (item) => () => {
    localStorage.setItem(
      'searchKeyword',
      JSON.stringify(newKeyword.filter((el) => el !== item)),
    );
    setResultKeyword(JSON.parse(localStorage.getItem('searchKeyword')));
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <SearchWrap onMouseLeave={searchHide} onSubmit={handleSubmit}>
          <Input
            ref={inputRef}
            type="search"
            placeholder="찾으시는 영화가 있나요?"
            layoutId={searchToggleId}
            onFocus={searchShow}
            onChange={onChangeValue}
          />
          <SearchButton>
            <SearchIcon />
          </SearchButton>
          <AnimatePresence>
            {searchToggleId && (
              <SearchForm layoutId={searchToggleId}>
                <SearchInner>
                  <SearchRecent
                    handleAllDelete={handleAllDelete}
                    newKeyword={newKeyword}
                    handleWords={handleWords}
                    handleDeleteWord={handleDeleteWord}
                  />
                  <SearchPopular data={data} handleWords={handleWords} />
                </SearchInner>
              </SearchForm>
            )}
          </AnimatePresence>
        </SearchWrap>
      )}
    </>
  );
};

export default SearchFormContainer;

const SearchWrap = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0;
  width: 370px;
  height: 38px;
  margin-left: 30px;
  background: #f8f8f8;
`;
const SearchInner = styled(motion.div)``;
const SearchForm = styled.form`
  position: absolute;
  left: 0;
  top: 38px;
  z-index: 1;
  width: 100%;
  padding: 16px;
  background: #fff;
  border: 1px solid #d9d9d9;
  box-shadow: 3px 10px 10px rgba(0, 0, 0, 0.2);
`;
const Input = styled(motion.input)`
  width: calc(100% - 30px);
  height: 100%;
  padding: 0 10px;
  border: none;
  background: transparent;
`;
const SearchButton = styled.button`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  svg {
    display: block;
    width: 100%;
    height: 100%;
    fill: #1a1a1a;
  }
`;
