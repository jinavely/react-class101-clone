import styled from 'styled-components';

const CommunityWrap = styled.section`
  padding: 48px 0px;
`;
const CommunityH3 = styled.h3`
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  letter-spacing: -0.4px;
  margin: 0px;
  color: rgb(26, 26, 26);
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

export function Community() {
  return (
    <CommunityWrap id="community">
      <CommunityH3>
        커뮤니티 <span>82개의 글</span>
        <button>글 작성하기</button>
      </CommunityH3>

      <ButtonFolder>더보기</ButtonFolder>
    </CommunityWrap>
  );
}
