import styled from 'styled-components';
import Loader from '../../components/common/Loader';
import { useQuery } from 'react-query';
import { getCreator } from '../../api';
import { CreatorContents } from '../../components/products/CreatorContents';
import { CreatorHeader } from '../../components/products/CreatorHeader';
import { useState } from 'react';

export const CreatorContainer = () => {
  // data
  const { data, isLoading } = useQuery('creator', getCreator);
  // 더보기 toggled
  const [toggled, setToggled] = useState(false);
  const handleMoreView = (e) => {
    if (toggled) {
      const scrollTop = e.target.offsetParent.offsetTop - 128;
      window.scrollTo({ top: scrollTop });
    }
    setToggled((prev) => !prev);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <CreatorWrap>
          <CreatorHeader data={data} />
          <CreatorContents
            data={data}
            toggled={toggled}
            handleMoreView={handleMoreView}
          />
        </CreatorWrap>
      )}
    </>
  );
};

const CreatorWrap = styled.section`
  position: relative;
  padding: 48px 0px;
`;
