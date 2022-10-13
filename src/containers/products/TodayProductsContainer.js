import styled from 'styled-components';
import { useQuery } from 'react-query';
import { getTodayProduct } from '../../api';
import Loader from '../../components/common/Loader';
import { TodaySlider } from '../../components/products/TodaySlider';

export function TodayProductsContainer() {
  const { data, isLoading } = useQuery('todayProduct', getTodayProduct);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <TodayProductsWrap>
          <TodayProductsH3>오늘본상품</TodayProductsH3>
          <TodaySlider data={data} />
        </TodayProductsWrap>
      )}
    </>
  );
}

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
