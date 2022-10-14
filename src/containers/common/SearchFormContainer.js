import { AnimatePresence, motion } from 'framer-motion';
import { useQuery } from 'react-query';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { getPopSearch } from '../../api';
import Loader from '../../components/common/Loader';
import { SearchPopular } from '../../components/common/SearchPopular';
import { SearchRecent } from '../../components/common/SearchRecent';

const SearchFormContainer = ({
  searchToggleId,
  searchHide,
  resultKeyword,
  setResultKeyword,
  inputRef,
}) => {
  // data
  const { data, isLoading } = useQuery('popularSearch', getPopSearch);

  // search
  const history = useHistory();
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
        <AnimatePresence>
          {searchToggleId && (
            <SearchWrap layoutId={searchToggleId}>
              <SearchInner>
                <SearchRecent
                  handleAllDelete={handleAllDelete}
                  newKeyword={newKeyword}
                  handleWords={handleWords}
                  handleDeleteWord={handleDeleteWord}
                />
                <SearchPopular data={data} handleWords={handleWords} />
              </SearchInner>
            </SearchWrap>
          )}
        </AnimatePresence>
      )}
    </>
  );
};

export default SearchFormContainer;

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
