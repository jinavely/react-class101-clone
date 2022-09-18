import styled from 'styled-components';

const TodayProductsWrap = styled.section`
  max-width: 1216px;
  margin: 50px auto;
`;
const TodayProductsH3 = styled.h3`
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  letter-spacing: -0.4px;
  margin: 0px;
  color: rgb(26, 26, 26);
`;

export function TodayProducts() {
  return (
    <TodayProductsWrap>
      <TodayProductsH3>오늘본상품</TodayProductsH3>
    </TodayProductsWrap>
  );
}
