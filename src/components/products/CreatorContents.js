import styled from 'styled-components';

export const CreatorContents = ({ data, toggled, handleMoreView }) => {
  const itemRef = document.querySelector(CreatorText);
  return (
    <>
      <CreatorText itemRef={itemRef} className={toggled ? 'active' : null}>
        <p>
          <img src={data.image} alt={data.alt} />
        </p>
        <p dangerouslySetInnerHTML={{ __html: data.text }} />
      </CreatorText>
      <ButtonFolder onClick={handleMoreView}>
        {toggled ? '접기' : '더보기'}
      </ButtonFolder>
    </>
  );
};

const CreatorText = styled.div`
  position: relative;
  max-height: 384px;
  overflow: hidden;
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid rgba(248, 248, 248);
  &.active {
    max-height: 100%;
    &:after {
      display: none;
    }
  }
  &:after {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 90px;
    background-image: linear-gradient(
      rgba(255, 255, 255, 0) 0%,
      rgb(255, 255, 255) 100%
    );
  }
  p {
    margin-top: 10px;
    white-space: pre-wrap;
  }
  img {
    max-width: 100%;
    object-fit: cover;
  }
`;
const ButtonFolder = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  color: rgb(26, 26, 26);
  background-color: rgb(248, 248, 248);
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.2px;
  margin-top: 24px;
  padding: 0px 16px;
  height: 40px;
  transition: background-color 0.1s ease 0s;
  text-decoration-line: none;
  &:hover,
  &:active {
    background-color: rgb(223, 223, 223);
  }
`;
