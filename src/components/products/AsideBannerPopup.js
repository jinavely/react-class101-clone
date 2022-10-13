import styled from 'styled-components';
import { LayerPopup } from '../common/LayerPopup';

export const AsideBannerPopup = ({ bannerSelectedId }) => {
  return (
    <>
      <LayerPopup
        visible={false}
        title="준비물과 함께<br />언제 어디서든 수강하세요"
        selectedId={bannerSelectedId}
      >
        <BannerPopParam>
          필요한 모든 준비물을 무료배송으로 보내드려요.
          <br />
          언제 어디서든 편하게 시작해보세요
        </BannerPopParam>
        <BannerPopList>
          <BannerPopListItem>모든 디바이스 지원</BannerPopListItem>
          <BannerPopListItem>수강 기간 내 무제한 반복수강</BannerPopListItem>
        </BannerPopList>
      </LayerPopup>
    </>
  );
};

const BannerPopList = styled.ul`
  display: flex;
`;
const BannerPopListItem = styled.li`
  font-size: 11px;
  line-height: 16px;
  letter-spacing: normal;
  margin: 12px 16px 0 0;
  display: flex;
  font-weight: 600;
  color: rgb(255, 61, 0);
`;
const BannerPopParam = styled.p`
  font-size: 14px;
  font-weight: normal;
  color: rgb(26, 26, 26);
  line-height: 20px;
  letter-spacing: -0.15px;
  margin: 0px;
`;
