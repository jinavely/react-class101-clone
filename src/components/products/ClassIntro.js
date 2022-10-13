import styled from 'styled-components';

export const ClassIntro = ({ data }) => {
  return (
    <>
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
    </>
  );
};

const Image = styled.img`
  max-width: 100%;
  object-fit: cover;
`;
const IntroBox = styled.div`
  margin-top: 20px;
`;
