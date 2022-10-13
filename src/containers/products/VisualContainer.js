import styled from 'styled-components';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { getVisual } from '../../api';
import Loader from '../../components/common/Loader';
import { VisualPicture } from '../../components/products/VisualPicture';
import { VisualSlider } from '../../components/products/VisualSlider';

export function VisualContainer() {
  // data
  const { data, isLoading } = useQuery('visual', getVisual);
  // popup
  const [selectedId, setSelectedId] = useState(null);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <VisualWrap layoutId={selectedId}>
            <VisualPicture data={data} setSelectedId={setSelectedId} />
          </VisualWrap>

          <VisualSlider
            data={data}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
        </>
      )}
    </>
  );
}

const VisualWrap = styled.div`
  display: flex;
  gap: 6px;
  width: 1216px;
  margin: 0 auto;
  height: 520px;
`;
