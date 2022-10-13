import styled from 'styled-components';
import { LayerPopup } from '../../components/common/LayerPopup';
import { priceFormat } from '../../utils/filter';

export const AsideClassPopup = ({ asideData, saleSelectedId }) => {
  return (
    <>
      <LayerPopup
        visible={false}
        title="할인 및 할부 안내"
        selectedId={saleSelectedId}
      >
        <LayerSale>
          <LayerSaleH3>할인가 안내</LayerSaleH3>
          <LayerSaleDl>
            <LayerSaleDiv>
              <LayerSaleDt>정가</LayerSaleDt>
              <LayerSaleDd>{priceFormat(asideData.price)}원</LayerSaleDd>
            </LayerSaleDiv>
            <LayerSaleDiv>
              <LayerSaleDt>기본 할인 금액</LayerSaleDt>
              <LayerSaleDd>
                -
                {priceFormat(
                  (asideData.price * (asideData.sale * 0.01)).toFixed(0),
                )}
                원
              </LayerSaleDd>
            </LayerSaleDiv>
            <LayerSaleDiv>
              <LayerSaleDt>{asideData.monthlyInstallment}개월 할부</LayerSaleDt>
              <LayerSaleDd>
                {asideData.sale}% 월
                {priceFormat(
                  (
                    asideData.price / asideData.monthlyInstallment -
                    (asideData.price / asideData.monthlyInstallment) *
                      (asideData.sale * 0.01)
                  ).toFixed(0),
                )}
                원
              </LayerSaleDd>
            </LayerSaleDiv>
          </LayerSaleDl>

          <LayerSaleH3>카드사 무이자 할부 안내</LayerSaleH3>
          <OrderList>
            <OrderItem>1. 신한카드: 2, 3, 4, 5, 6, 7 개월 무이자</OrderItem>
            <OrderItem>2. 현대카드: 2, 3, 4, 5, 6, 7 개월 무이자</OrderItem>
            <OrderItem>3. 삼성카드: 2, 3, 4, 5, 6 개월 무이자</OrderItem>
            <OrderItem>4. 우리카드: 2, 3, 4, 5, 6, 7 개월 무이자</OrderItem>
            <OrderItem>5. 국민카드: 2, 3, 4, 5, 6, 7 개월 무이자</OrderItem>
            <OrderItem>6. 롯데카드: 2, 3, 4 개월 무이자</OrderItem>
            <OrderItem>7. 농협카드: 2, 3, 4, 5, 6, 7, 8 개월 무이자</OrderItem>
            <OrderItem>8. 하나카드: 2, 3, 4, 5, 6, 7, 8 개월 무이자</OrderItem>
            <OrderItem>9. BC카드: 2, 3, 4, 5, 6, 7 개월 무이자</OrderItem>
            <OrderItem>10. 전북카드: 2, 3, 4, 5 개월 무이자</OrderItem>
          </OrderList>

          <NoticeBox>
            <NoticeTitle as="p">[유의사항]</NoticeTitle>
            <Notice>
              <NoticeItem>
                ※ 상기행사는 카드사 사정에 의해 변경 및 중단될 수 있습니다.
                자세한 사항은 각 카드사 홈페이지를 참조 바랍니다.
              </NoticeItem>
              <NoticeItem>
                ※ 법인/기업(개인사업자)/체크/선불/GIFT/하이브리드/ 은행계열 카드
                등 제외
              </NoticeItem>
              <NoticeItem>
                ※ 무이자/부분무이자 적용 시, 포인트/마일리지 적립 불가.
              </NoticeItem>
              <NoticeItem>
                ※ 상점부담
                무이자/직계약/특별제휴가맹점,오프라인(비인증),대학등록금,지방세(세외수입,상수도),제약(B2B),주유,자동차,승차권,방송수신료,보험
                등 제외
              </NoticeItem>
              <NoticeItem>
                ※ 하나카드는 PG업종 외 서적, 학원, 면세점 등 별도업종 및
                환금성가맹점 제외
              </NoticeItem>
            </Notice>
          </NoticeBox>
        </LayerSale>
      </LayerPopup>
    </>
  );
};

const LayerSale = styled.div``;
const LayerSaleH3 = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: rgb(26, 26, 26);
  line-height: 24px;
  letter-spacing: -0.45px;
  margin: 0px;
`;
const LayerSaleDl = styled.dl`
  margin: 16px 0;
  padding: 16px 0;
  border-top: 1px solid rgb(248 248 248);
  border-bottom: 1px solid rgb(248 248 248);
`;
const LayerSaleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`;
const LayerSaleDt = styled.dt`
  font-size: 14px;
  font-weight: normal;
  color: rgb(26, 26, 26);
  line-height: 20px;
  letter-spacing: -0.15px;
  margin: 0px;
`;
const LayerSaleDd = styled.dd`
  font-size: 14px;
  font-weight: normal;
  color: rgb(26, 26, 26);
  line-height: 20px;
  letter-spacing: -0.15px;
  margin: 0px;
`;
const OrderList = styled.ol`
  margin-top: 16px;
`;
const OrderItem = styled.li`
  font-size: 14px;
  font-weight: normal;
  color: rgb(26, 26, 26);
  line-height: 20px;
  letter-spacing: -0.15px;
  margin: 8px 0;
`;
const NoticeBox = styled.div`
  margin-top: 32px;
`;
const Notice = styled.ul``;
const NoticeItem = styled.li`
  font-size: 14px;
  font-weight: normal;
  color: #625f5f;
  line-height: 20px;
  letter-spacing: -0.15px;
  margin: 8px 0 0 18px;
  text-indent: -18px;
`;
const NoticeTitle = styled(NoticeItem)``;
