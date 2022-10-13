import styled from 'styled-components';
import Loader from '../../components/common/Loader';
import { useQuery } from 'react-query';
import { getClassIntro } from '../../api';
import { ClassIntro } from '../../components/products/ClassIntro';

export const ClassIntroContainer = () => {
  // data
  const { data, isLoading } = useQuery('classIntro', getClassIntro);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ClassIntroWrap>
          <ClassIntroH3 dangerouslySetInnerHTML={{ __html: data.title }} />
          <ClassIntro data={data} />
        </ClassIntroWrap>
      )}
    </>
  );
};

const ClassIntroWrap = styled.section`
  padding: 48px 0px 24px;
`;
const ClassIntroH3 = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: rgb(26, 26, 26);
  line-height: 34px;
  letter-spacing: -0.4px;
  margin: 0 0 20px 0;
`;
