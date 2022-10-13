import { useState } from 'react';
import styled from 'styled-components';
import Loader from '../../components/common/Loader';
import { useQuery } from 'react-query';
import { getAside } from '../../api';

import { AsideClassPopup } from '../../components/products/AsideClassPopup';
import { AsideBannerPopup } from '../../components/products/AsideBannerPopup';
import { AsideContents } from '../../components/products/AsideContents';

export const AsideContainer = () => {
  // 클래스 할인가 show hide
  const [saleSelectedId, setSaleSelectedId] = useState(null);
  const saleLayerToggle = () => {
    setSaleSelectedId((prev) => !prev);
  };
  // 준비물까지 챙겨주는 온라인 클래스 show hide
  const [bannerSelectedId, setBannerSelectedId] = useState(null);
  const BannerLayerToggle = () => {
    setBannerSelectedId((prev) => !prev);
  };

  // DATA
  const { data: asideData, isLoading } = useQuery('aside', getAside);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <AsideWrap>
          <AsideInner>
            <AsideContents
              asideData={asideData}
              saleSelectedId={saleSelectedId}
              saleLayerToggle={saleLayerToggle}
              bannerSelectedId={bannerSelectedId}
              BannerLayerToggle={BannerLayerToggle}
            />
          </AsideInner>

          <AsideClassPopup
            asideData={asideData}
            saleSelectedId={saleSelectedId}
          />
          <AsideBannerPopup bannerSelectedId={bannerSelectedId} />
        </AsideWrap>
      )}
    </>
  );
};

const AsideWrap = styled.section`
  width: 400px;
`;
const AsideInner = styled.div`
  position: sticky;
  top: 78px;
`;
