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

export function Community() {
  return (
    <CommunityWrap id="community">
      <CommunityH3>커뮤니티</CommunityH3>
    </CommunityWrap>
  );
}
