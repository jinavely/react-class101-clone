import styled from 'styled-components';
import axios from 'axios';
import Loader from '../../common/Loader';
import { useEffect, useState } from 'react';

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
const Image = styled.img`
  max-width: 100%;
  object-fit: cover;
`;
const IntroBox = styled.div`
  margin-top: 20px;
`;

export function ClassIntro() {
  // data
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchClassIntro = async () => {
    try {
      setLoading(true);
      const response = await (
        await axios.get('http://localhost:4000/classIntro')
      ).data;
      setData(response);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchClassIntro();
  }, [setData]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <ClassIntroWrap>
          <ClassIntroH3 dangerouslySetInnerHTML={{ __html: data.title }} />

          <Image src={data.image1} alt="" />

          <IntroBox>
            <h3
              style={{ lineHeight: 1.5 }}
              dangerouslySetInnerHTML={{ __html: data.text1 }}
            />
            <p style={{ marginTop: '10px' }}>
              <Image src={data.image2} alt="" />
            </p>
            <p
              style={{
                marginTop: '50px',
              }}
              dangerouslySetInnerHTML={{ __html: data.text2 }}
            />

            <h3
              style={{ lineHeight: '1.5', marginTop: '50px' }}
              dangerouslySetInnerHTML={{ __html: data.text3 }}
            />
            <p style={{ marginTop: '10px' }}>
              <Image src={data.image3} alt="" />
            </p>
          </IntroBox>
        </ClassIntroWrap>
      )}
    </>
  );
}
