import styled from 'styled-components';

const CreatorWrap = styled.section`
  position: relative;
  padding: 48px 0px;
`;
const CreatorH3 = styled.h3`
  font-size: 24px;
  font-weight: normal;
  line-height: 34px;
  letter-spacing: -0.4px;
  margin: 0px;
  color: rgb(26, 26, 26);
  strong {
    font-weight: bold;
  }
`;
const CreatorAvatar = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Exposure = styled.p`
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 10px;
  color: rgb(162, 162, 162);
`;
const ExposureImage = styled.img`
  width: 18px;
  height: 18px;
`;
const Avatar = styled.img`
  object-fit: cover;
  width: 64px;
  height: 64px;
  border: 1px solid rgb(248, 248, 248);
  border-radius: 100%;
`;
const LastActivity = styled.p`
  font-size: 11px;
  font-weight: normal;
  color: rgb(26, 26, 26);
  line-height: 16px;
  letter-spacing: normal;
  margin: 10px 0 0 0;
`;
const CreatorText = styled.div`
  position: relative;
  max-height: 384px;
  overflow: hidden;
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid rgba(248, 248, 248);
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

export function Creator() {
  return (
    <CreatorWrap id="creator">
      <CreatorAvatar>
        <CreatorH3>
          크리에이터
          <br />
          <strong>주언규PD</strong> 입니다.
        </CreatorH3>
        <Avatar
          src="https://cdn.class101.net/images/faa9d576-9722-4b30-89d9-a8387e6193d1"
          alt=""
        />
      </CreatorAvatar>
      <Exposure>
        <ExposureImage
          src="https://class101.net/images/ic-youtube.png"
          alt=""
        />
        주피디JooPD
      </Exposure>
      <LastActivity>
        마지막 활동 <strong>3시간 전 미션 답변 작성</strong>
      </LastActivity>
      <CreatorText>
        <p>
          <img
            src="https://cdn.class101.net/images/4ba887da-5744-4f4f-b1da-248f9274c53d"
            alt=""
          />
        </p>
        <p>안녕하세요.</p>
        <p>
          저는 &lt;오아시스홈&gt;이라는 블로그를 운영하고 있는 네이버 리빙
          인플루언서 '오아시스' 입니다. 저는 공간과 인테리어, 미니멀리즘을
          좋아하며 또 책과 달리기도 아주 좋아합니다.
        </p>
        <br />
        <br />
        <p>
          저는 30년이 다 되어가는 오래된 우리집을 업체에 맡기지 않고,
          셀프인테리어를 통해 고쳤으며 그 과정과 내용을 블로그에 올리면서
          6000여명의 고마운 이웃이 생겼습니다. 가성비와 가심비를 모두 만족하는
          미니멀한 인테리어의 비밀과 디테일을 공개하여 오늘의집은 물론,
          네이버리빙에는 20번도 넘게 나왔고, 덕분에 많은 이웃들의 응원과 사랑을
          받으며 매일매일 성장하고 있습니다.
        </p>
        <br />
        <br />
        <p>
          저의 내공을 다지기 위해 공부하려는 마음으로 셀프인테리어 멘토링을
          시작했고, 10번이 넘는 셀프인테리어를 직·간접적으로 경험하며 저는
          어느덧 셀프인테리어 전문가가 되었습니다. 또 배운 것을 나누기 위해
          블로그 내에서 셀프인테리어 특강을 진행했었고 강의수익금 200여만원은
          전액 기부하여 보내주신 사랑을 의미있게 나누기도 했습니다.
        </p>
        <p>
          저는 셀프인테리어를 통해 공사비용을 많이 아낄 수 있었으며, 아름답고
          미니멀한 공간에 대해 끊임없이 생각하고 구현하기를 반복했습니다. 매일을
          연구하고 성장하며 간결하고 단순한 삶에 대한 영감을 이어가고 있습니다.
          치열하게 고민했던 저의 셀프인테리어 노하우와 소중한 경험을
          &lt;클래스101&gt; 에서 더욱 많은 사람들에게 나누고 싶습니다.
        </p>
        <br />
        <br />
        <p>
          내 모든 삶의 중심이 되는 &lt;집&gt;이라는 공간을 더욱 가치있게 만드는
          방법,
        </p>
        <p>셀프인테리어의 모든 과정과 디테일을 공개합니다.</p>
        <p>클래스에서 뵙겠습니다!</p>
        <p style={{ textAlign: 'right' }}>셀프인테리어 멘토</p>
        <p style={{ textAlign: 'right' }}>오아시스 드림</p>
      </CreatorText>
      <ButtonFolder>더보기</ButtonFolder>
    </CreatorWrap>
  );
}
